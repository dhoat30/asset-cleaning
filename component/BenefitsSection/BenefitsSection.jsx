import React from "react";
import styled from "@emotion/styled";
import { Container, Typography, Box, Paper } from "@mui/material";
import Link from "next/link";
import DarkButton from "../Button/DarkButton";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import CardComponent from "../Cards/Card";

export default function BenefitsSection({
  title,
  subtitle,
  cta,
  benefitCardsArray,
}) {
  return (
    <ContainerStyled maxWidth="xl" className="row">
      <Box className="content-wrapper">
        <Typography
          variant="h6"
          component="h4"
          align="center"
          className="subtitle"
        >
          {subtitle}
        </Typography>
        <Typography variant="h3" component="h3" align="center">
          {title}
        </Typography>
      </Box>
      <Box className="cards-wrapper">
        {benefitCardsArray.map((item, index) => {
          return (
            <CardComponent
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </Box>
    </ContainerStyled>
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
        width: calc(100% - 24px);
      }
    }
  }
  .cta {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
`;
