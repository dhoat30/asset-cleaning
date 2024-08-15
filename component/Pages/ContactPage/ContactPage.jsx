"use client";
import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import ContactForm from "@/component/Forms/ContactForm/ContactForm";
import TestimonialSection from "@/component/TestimonialSection/TestimonialSection";
export default function ContactPage({ data, testimonialData }) {
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
          <ContactForm />
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
