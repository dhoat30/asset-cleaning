"use client";
import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import ContactForm from "@/component/Forms/ContactForm/ContactForm";
import TestimonialSection from "@/component/TestimonialSection/TestimonialSection";
import BookAppointmentForm from "@/component/Forms/BookAppointmentForm/BookAppointmentForm";
export default function BookAppointment({ data, testimonialData }) {
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
        <div className="contact-form-wrapper">
          <BookAppointmentForm />
        </div>
      </ContainerStyled>
      <TestimonialSection data={testimonialData.testimonial} />
    </>
  );
}
const ContainerStyled = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  gap: 80px;
  padding-top: 80px;

  @media (max-width: 600px) {
    padding-top: 40px;
    padding-bottom: 0;
  }
  .content-wrapper {
    .title {
      color: var(--material-theme-sys-light-on-surface-variant, #44483e);
    }
    .description {
      margin-top: 12px;
      color: var(--material-theme-sys-light-on-surface-variant, #44483e);
    }
  }
  .contact-form-wrapper {
    border-radius: 16px;
  }
`;
