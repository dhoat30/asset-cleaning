"use client";
import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import ContactForm from "@/component/Forms/ContactForm/ContactForm";
import TestimonialSection from "@/component/TestimonialSection/TestimonialSection";
import GetQuoteForm from "@/component/Forms/GetQuoteForm/GetQuoteForm";
import Link from "next/link";
export default function GetQuotePage({ data, testimonialData }) {
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

          <Typography variant="h6" component="div" className="cta">
            Are you interested in joining our team instead?
            <Link href="/work-with-us"> Visit our Career Page</Link> to explore
            job opportunities with us.
          </Typography>
        </Box>
        <div className="contact-form-wrapper">
          <GetQuoteForm />
        </div>
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
    padding-top: 140px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding-top: 120px;
    padding-bottom: 40px;
  }

  @media (max-width: 600px) {
    padding-bottom: 0;
  }
  .content-wrapper {
    .title {
      color: var(--light-on-surface-variant, #44483e);
    }
    .description,
    .cta {
      margin-top: 12px;
      color: var(--light-on-surface-variant, #44483e);
    }
    .cta {
      font-weight: 600;
      a {
        text-decoration: underline;
      }
    }
  }
  .contact-form-wrapper {
    border-radius: 16px;
  }
`;
