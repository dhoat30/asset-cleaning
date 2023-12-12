import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import React from "react";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import TestimonialCarousel from "./TestimonialCarousel";
export default function TestimonialSection({ data }) {
  return (
    <Section id="testimonial">
      <Box className="row">
        <div className="title-wrapper">
          <FormatQuoteRoundedIcon className="icon" />
          <Typography variant="h3" component="h3" className="title">
            {data.title}
          </Typography>
        </div>
        <div className="review-wrapper">
          <TestimonialCarousel dataArr={data.cards} />
        </div>
      </Box>
    </Section>
  );
}
const Section = styled.section`
  margin: 120px 0;
  .row {
    padding-right: 0;
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;
    @media (max-width: 700px) {
      display: block;
    }
    .title-wrapper {
      padding-top: 160px;
      padding-bottom: 160px;
      border-radius: 0 40px 40px 0;

      background: var(
        --material-theme-sys-light-on-primary-fixed-variant,
        #295000
      );
      padding-left: 27%;
      @media (max-width: 1700px) {
        padding-left: 14%;
      }
      @media (max-width: 1536px) {
        padding-left: 24px;
      }
      @media (max-width: 700px) {
        border-radius: 0 0 40px 40px;
        padding: 40px 16px;
      }
      .icon {
        color: var(--material-theme-sys-light-primary-container, #aff66e);
        font-size: 5rem;
      }
      .title {
        color: var(--material-theme-sys-light-primary-container, #aff66e);
      }
    }
    .review-wrapper {
      padding-right: 27%;
      padding-left: 80px;
      margin-top: 16px;
      @media (max-width: 1700px) {
        padding-right: 14%;
      }
      @media (max-width: 1536px) {
        padding-right: 24px;
      }
      @media (max-width: 700px) {
        padding: 0 16px;
      }
    }
  }
`;
