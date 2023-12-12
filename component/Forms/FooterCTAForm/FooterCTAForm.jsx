import React, { useState, forwardRef } from "react";
import styled from "@emotion/styled";
import { Paper, Typography, Box } from "@mui/material";
import { footerCTAData } from "./footerCTAData";
import Input from "../InputFields/Input";
import "react-datepicker/dist/react-datepicker.css";

import LoadingBtn from "@/component/Button/LoadingBtn";
import axios from "axios";
export default function FooterCTAForm({ title, description, formName }) {
  const [formData, setFormData] = useState({
    typeOfService: [],
    formName: "Footer Form",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [newSubmission, setNewSubmission] = useState(false);

  const handleChange = (id, value, isSelectMultiple) => {
    let updatedValue = value;

    setFormData({ ...formData, [id]: updatedValue });
    // Reset errors on change
    if (errors[id]) {
      setErrors({ ...errors, [id]: false });
    }
  };

  const handleBlur = (id, validationFunction) => {
    if (!validationFunction(formData[id])) {
      setErrors({ ...errors, [id]: true });
    }
  };

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission if using form tag

    let allFieldsValid = true;
    const newErrors = {};

    // Loop through each field to check if it's required and valid
    footerCTAData.forEach((field) => {
      if (field.required && !formData[field.id]) {
        // Set field as invalid if it's required but empty or invalid
        newErrors[field.id] = true;
        allFieldsValid = false;
        return;
      }
    });
    setErrors(newErrors);
    // If any required field is invalid, stop and don't make API calls
    if (!allFieldsValid) {
      return; // Stop the function if any field is invalid or empty
    }

    setIsLoading(true);

    // hubspot config
    var configHubspot = {
      method: "post",
      url: "/api/create-hubspot-contact",
      headers: { "Content-Type": "application/json" },
      data: formData,
    };
    const mailText = `First name: ${formData.firstName} \n Email address: ${formData.email} \n Message:${formData.message}`;

    // mailgun config
    var configSendMail = {
      method: "post",
      url: "/api/sendmail",
      headers: { "Content-Type": "application/json" },
      data: {
        mailText: mailText,
        formName: formData.formName,
        emailTo: "admin@assetcleaning.co.nz",
        fromEmail: formData.email,
      },
    };

    Promise.all([axios(configHubspot), axios(configSendMail)])
      .then(function (responses) {
        console.log(responses);
        // responses[0] is the response from create-hubspot-contact
        // responses[1] is the response from sendmail
        console.log(responses);
        if (responses[0].status === 200) {
          console.log("sucesss");
          setIsLoading(false);
          setIsSuccess(true);
          setNewSubmission(true);
          // set initial state to empty string
          setError(false);
        } else {
          console.log("error");
          setIsLoading(false);
          setIsSuccess(false);
          setError(true);
          setNewSubmission(false);
        }

        // Other success logic
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
        setIsSuccess(false);
        setError(true);
        setNewSubmission(false);
      });
  };
  // loop over all the input fields
  const formInputs = footerCTAData.map((field, index) => {
    const isSelectMultiple = field.type === "select" && field.multiple; // Example condition
    return (
      <Input
        key={index}
        label={field.label}
        type={field.type}
        value={
          isSelectMultiple ? formData[field.id] || [] : formData[field.id] || ""
        }
        onChange={(e) =>
          handleChange(field.id, e.target.value, isSelectMultiple)
        }
        onBlur={
          field.required ? () => handleBlur(field.id, field.validation) : null
        } //check if the field is required then call the function
        required={field.required}
        autoComplete={field.autoComplete}
        isInvalid={errors[field.id]}
        errorMessage={field.errorMessage}
        options={field.options}
        multipleValue={field.multiple}
      />
    );
  });

  return (
    <ContainerStyled>
      <Paper
        className="wrapper"
        elevation={3}
        sx={{
          background:
            "var(--material-theme-sys-light-surface-container-low, #F4F4ED)",
        }}
      >
        <Typography variant="h4" component="h3">
          {title}
        </Typography>
        {description && (
          <Typography variant="body1" component="p" sx={{ marginTop: "16px" }}>
            {description}
          </Typography>
        )}

        <Box className="form-wrapper">
          {formInputs}

          <LoadingBtn
            newSubmission={newSubmission}
            onClick={submitHandler}
            isLoading={isLoading}
            isSuccess={isSuccess}
          >
            SCHEDULE NOW
          </LoadingBtn>
        </Box>
      </Paper>
    </ContainerStyled>
  );
}
const ContainerStyled = styled(Box)`
  .wrapper {
    border-radius: 16px;
    padding: 32px 24px;
    @media (max-width: 600px) {
      padding: 24px 8px;
    }
    @media (max-width: 1140px) {
      text-align: center;
    }
  }
`;
