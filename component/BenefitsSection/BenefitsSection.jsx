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
          {title}
        </Typography>
        <Typography variant="h3" component="h3" align="center">
          {subtitle}
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
  .subtitle {
    margin-bottom: 8px;
    color: var(--material-theme-sys-dark-on-primary-fixed-variant, #295000);
  }
  .cards-wrapper {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    gap: 24px;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    justify-items: center;
    margin-top: 56px;
    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 600px) {
      margin-top: 32px;
      grid-template-columns: 1fr;
    }
  }
  .cta {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
`;
