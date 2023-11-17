"use client";

import React, { useState } from "react";
import Input from '../InputFields/Input'
import { contactFormData } from "./contactFormData";
import LoadingBtn from "@/component/Button/LoadingBtn";
import Box from '@mui/material/Box';
import styled from "@emotion/styled";
import axios from "axios";
import { Alert } from "@mui/material";


export default function ContactForm({ className }) {
    const [formData, setFormData] = useState({ typeOfService: [], formName: "Contact Form" });
    const [errors, setErrors] = useState({});
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [newSubmission, setNewSubmission] = useState(false)


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
        contactFormData.forEach(field => {
            if (field.required && !formData[field.id]) {
                // Set field as invalid if it's required but empty or invalid
                newErrors[field.id] = true;
                allFieldsValid = false;
                return
            }
        });
        setErrors(newErrors);
        // If any required field is invalid, stop and don't make API calls
        if (!allFieldsValid) {
            return; // Stop the function if any field is invalid or empty
        }



        setIsLoading(true)
        // Send an event to GA4 manually
        if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'contact_form', // The custom event name you configured in GTM
                'event_category': 'form_submit',
                'event_label': 'Speed Checker Form Submitted'
            });
        }

        // hubspot config
        var configHubspot = {
            method: 'post',
            url: '/api/create-hubspot-contact',
            headers: { 'Content-Type': 'application/json' },
            data: formData
        };
        // mailgun config
        var configSendMail = {
            method: 'post',
            url: '/api/sendmail',
            headers: { 'Content-Type': 'application/json' },
            data: formData
        };

        Promise.all([axios(configHubspot), axios(configSendMail)])
            .then(function (responses) {
                console.log(responses)
                // responses[0] is the response from create-hubspot-contact
                // responses[1] is the response from sendmail
                if (responses[0].status === 200) {
                    setIsLoading(false)
                    setIsSuccess(true)
                    setNewSubmission(true)
                    // set initial state to empty string 
                    setActiveStep((prevActiveStep) => prevActiveStep + 1);
                    setError(false)

                }
                else {

                    setIsLoading(false)
                    setIsSuccess(false)
                    setError(true)
                    setNewSubmission(false)

                }

                // Other success logic
            })
            .catch(function (error) {
                console.log(error);
                setIsLoading(false)
                setIsSuccess(false)
                setError(true)
                setNewSubmission(false)
            });
    }


    const formInputs = contactFormData.map((field, index) => {
        const isSelectMultiple = field.type === "select" && field.multiple; // Example condition

        return <Input
            key={index}
            label={field.label}
            type={field.type}
            value={isSelectMultiple ? formData[field.id] || [] : formData[field.id] || ''}
            onChange={(e) => handleChange(field.id, e.target.value, isSelectMultiple)}
            onBlur={field.required ? () => handleBlur(field.id, field.validation) : null} //check if the field is required then call the function 
            required={field.required}
            autoComplete={field.autoComplete}
            isInvalid={errors[field.id]}
            errorMessage={field.errorMessage}
            options={field.options}
            multipleValue={field.multiple}

        />
    })
    return (
        <Container className={`${className} py-8 `}>
            <Box sx={{ width: '100%' }}>
                <div className="input-wrapper p-6">

                    {
                        formInputs
                    }

                    <LoadingBtn newSubmission={newSubmission} onClick={submitHandler} isLoading={isLoading} isSuccess={isSuccess}>Contact now</LoadingBtn>

                    {error && <Alert sx={{ margin: "8px 0" }} severity='error'>Something went wrong. Please Try again</Alert>}
                </div>


            </Box>

        </Container>
    )
}

const Container = styled.div`
@media(max-width: 500px){ 
    .stepper-wrapper{ 
    display: none ;
}
}

.input-wrapper{ 
    background: var(--material-theme--sys--dark--surface-container);
border-radius: 16px; 
    
    margin: 16px 24px 16px 24px; 
    @media(max-width: 500px){ 
        margin: 0 auto 0 auto;   
    }
    .Mui-error{ 
        color: var(--material-theme-sys-dark-error); 
        font-size: 1rem;
    }
}

`

