"use client";
import { Box, Container, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";

import React from "react";
import styled from "@emotion/styled";
import ContactForm from "@/component/Forms/ContactForm/ContactForm";
import TestimonialSection from "@/component/TestimonialSection/TestimonialSection";
import Script from "next/script";

export default function WorkWithUs({ data, testimonialData }) {
  return (
    <>
      <ContainerStyled maxWidth="xl" className="row">
        <Box className="content-wrapper">
          <Typography variant="h2" component="h1" className="title">
            {data.acf.form_section.title}
          </Typography>
          <Typography variant="h6" component="h2" className="description">
            {data.acf.form_section.description}
          </Typography>
        </Box>
        <Paper className="contact-form-wrapper" variant="outlined">
          {/* <ContactForm /> */}
          <div id="form-container">
            <Script
              src="//js-eu1.hsforms.net/forms/embed/v2.js"
              strategy="lazyOnload"
              onLoad={() => {
                if (window.hbspt) {
                  window.hbspt.forms.create({
                    region: "eu1",
                    portalId: "143792780",
                    formId: "838413ee-65e1-4ad0-985e-faf29574eb4c",
                    target: "#form-container",
                  });
                }
              }}
            />
          </div>
        </Paper>
      </ContainerStyled>
      <TestimonialSection data={testimonialData.testimonial} />
    </>
  );
}

const ContainerStyled = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  padding-top: 80px;
  @media (max-width: 1200px) {
    padding-top: 120px;
    padding-bottom: 0;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  #form-container {
    min-height: 726px;
    padding: 16px;
  }
  .content-wrapper {
    .title {
      color: var(--light-on-surface-variant, #44483e);
    }
    .description {
      margin-top: 12px;
      color: var(--light-on-surface-variant, #44483e);
    }
  }
  .contact-form-wrapper {
    padding: 0 16px;
    border-radius: 16px;
  }
`;
