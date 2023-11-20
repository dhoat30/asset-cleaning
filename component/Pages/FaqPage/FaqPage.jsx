"use client";
import React from "react";
import styled from "@emotion/styled";
import { Container, Typography, Box, Paper } from "@mui/material";
import Link from "next/link";
import DarkButton from "@/component/Button/DarkButton";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import CardComponent from "@/component/Cards/Card";
import FaqSection from "@/component/FaqSection/FaqSection";
import TestimonialSection from "@/component/TestimonialSection/TestimonialSection";
export default function FaqPage({ data, faqDataArr, testimonialData }) {
  console.log(data);
  const title = data.acf.hero.title;
  const description = data.acf.hero.subtitle;
  return (
    <>
      <FaqSection
        title={title}
        description={description}
        faqDataArr={faqDataArr}
      />
      <TestimonialSection data={testimonialData.testimonial} />
    </>
  );
}
const ContainerStyled = styled(Container)`
  padding-top: 80px;
  padding-bottom: 80px;
  @media (max-width: 600px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .subtitle {
    margin-bottom: 8px;
    color: var(--material-theme-sys-dark-on-primary-fixed-variant, #295000);
  }
  .cards-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    margin-top: 56px;
    @media (max-width: 650px) {
      margin-top: 32px;
    }
    > div {
      width: calc(33% - 24px);
      @media (max-width: 1000px) {
        width: calc(45% - 24px);
      }
      @media (max-width: 650px) {
        width: calc(100%);
      }
    }
  }
  .cta {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
`;
