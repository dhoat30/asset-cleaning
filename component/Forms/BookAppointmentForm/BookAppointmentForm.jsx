import React, { useState, forwardRef } from "react";
import styled from "@emotion/styled";
import { Container, Paper, Typography, Box } from "@mui/material";
import { appointmentFormData } from "./appointmentFormData";
import Input from "../InputFields/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import TextField from "@mui/material/TextField";
import CustomDatePicker from "../InputFields/DatePicker";
import LoadingBtn from "@/component/Button/LoadingBtn";
export default function BookAppointmentForm() {
  const [formData, setFormData] = useState({
    typeOfService: [],
    formName: "Contact Form",
  });
  const [errors, setErrors] = useState({});
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [newSubmission, setNewSubmission] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

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
    appointmentFormData.forEach((field) => {
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
    // Send an event to GA4 manually
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "contact_form", // The custom event name you configured in GTM
        event_category: "form_submit",
        event_label: "Speed Checker Form Submitted",
      });
    }

    // // hubspot config
    // var configHubspot = {
    //     method: 'post',
    //     url: '/api/create-hubspot-contact',
    //     headers: { 'Content-Type': 'application/json' },
    //     data: formData
    // };
    // // mailgun config
    // var configSendMail = {
    //     method: 'post',
    //     url: '/api/sendmail',
    //     headers: { 'Content-Type': 'application/json' },
    //     data: formData
    // };

    // Promise.all([axios(configHubspot), axios(configSendMail)])
    //     .then(function (responses) {
    //         console.log(responses)
    //         // responses[0] is the response from create-hubspot-contact
    //         // responses[1] is the response from sendmail
    //         if (responses[0].status === 200) {
    //             setIsLoading(false)
    //             setIsSuccess(true)
    //             setNewSubmission(true)
    //             // set initial state to empty string
    //             setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //             setError(false)

    //         }
    //         else {

    //             setIsLoading(false)
    //             setIsSuccess(false)
    //             setError(true)
    //             setNewSubmission(false)

    //         }

    //         // Other success logic
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //         setIsLoading(false)
    //         setIsSuccess(false)
    //         setError(true)
    //         setNewSubmission(false)
    //     });
  };
  // loop over all the input fields
  const formInputs = appointmentFormData.map((field, index) => {
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
    <ContainerStyled maxWidth="md">
      <Paper
        className="wrapper"
        elevation={3}
        sx={{
          background:
            "var(--material-theme-sys-light-surface-container-low, #F4F4ED)",
        }}
      >
        <Typography variant="h3" component="h3">
          Schedule Your Cleaning Appointment
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginTop: "16px" }}>
          We are excited to help you with your cleaning needs. Please fill out
          the form below and we will be in touch with you shortly.
        </Typography>

        <Box className="form-wrapper">
          {formInputs}
          <div className="date-picker-wrapper">
            <CustomDatePicker
              value={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
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
const ContainerStyled = styled(Container)`
  position: relative;
  top: -56px;
  .wrapper {
    border-radius: 16px;
    padding: 32px;
    @media (max-width: 600px) {
      padding: 32px 8px;
    }
    .form-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      @media (max-width: 600px) {
        display: block;
      }
      grid-column-gap: 24px;
      .date-picker-wrapper {
        grid-column: 1 / 3;
        .react-datepicker-wrapper {
          width: 100%;
        }
      }
      button {
        width: 170px;
      }
    }
  }
`;
