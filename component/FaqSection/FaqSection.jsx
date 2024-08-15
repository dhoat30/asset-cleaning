"use client";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import React from "react";
import styled from "@emotion/styled";

import FaqAccordion from "./FaqAccordion";
export default function FaqSection({ title, description, faqDataArr }) {
  return (
    <>
      <ContainerStyled maxWidth="xl" className="row">
        <Box className="content-wrapper">
          <Typography variant="h2" component="h1" className="title">
            {title}
          </Typography>
          <Typography variant="h6" component="h2" className="description">
            {description}
          </Typography>
        </Box>
        <div className="accordion-wrapper">
          <FaqAccordion faqDataArr={faqDataArr} />
        </div>
      </ContainerStyled>
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
`;
