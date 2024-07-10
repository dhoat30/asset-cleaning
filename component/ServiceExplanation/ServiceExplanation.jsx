import React from "react";
import styled from "@emotion/styled";
import { Container, Typography, Box, Paper } from "@mui/material";
import Link from "next/link";
import DarkButton from "../Button/DarkButton";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import CardComponent from "../Cards/Card";
export default function ServiceExplanation({
  title,
  subtitle,
  cta,
  cardsArray,
  description,
  sectionID,
}) {
  return (
    <BoxStyled id={sectionID} component="section">
      <ContainerStyled className="row">
        <Box className="content-wrapper">
          <Typography variant="h6" component="h4" className="subtitle">
            {subtitle}
          </Typography>
          <Typography className="title" variant="h3" component="h3">
            {title}
          </Typography>
          <Typography variant="body1" component="p" className="description">
            {description}
          </Typography>
        </Box>
        <Box className="cards-wrapper">
          {cardsArray.map((item, index) => {
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
    </BoxStyled>
  );
}
const BoxStyled = styled(Box)`
  background: var(--dark-on-primary-fixed-variant, #295000);
`;
const ContainerStyled = styled(Box)`
  display: flex;
  align-items: flex-start;
  margin-top: 80px;
  margin-bottom: 80px;
  @media (max-width: 600px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    gap: 0;
  }
  .content-wrapper {
    position: sticky;
    top: 0;
    bottom: 24px;
    width: 30%;
    padding: 80px 40px 40px 12%;

    @media (max-width: 1700px) {
      padding: 80px 40px 40px 5%;
    }
    @media (max-width: 1000px) {
      width: 100%;
      position: static;
      padding: 40px 16px 0 16px;
    }
    .subtitle {
      margin-bottom: 8px;
      color: var(--light-primary-container, #aff66e);
    }
    .title {
      color: var(--light-primary-container, #aff66e);
    }
    .description {
      margin-top: 16px;
      color: var(--light-primary-container, #aff66e);
    }
  }

  .cards-wrapper {
    border: 1px solid rgba(0, 0, 0, 0.12);
    width: 70%;
    @media (max-width: 1000px) {
      width: 100%;
      border: none;
    }
    /* grid-column: 3/5; */
    background: var(--light-surface, #fafaf2);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    padding: 80px 0;
    @media (max-width: 1000px) {
      padding: 40px 0 0 0;
      position: relative;
      top: 40px;
      border-radius: 40px;
    }
    @media (max-width: 650px) {
      margin-top: 32px;
    }
    > div {
      width: calc(45% - 24px);
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
