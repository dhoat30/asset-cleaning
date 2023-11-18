import React from "react";
import styled from "@emotion/styled";
import { Container, Typography, Box } from "@mui/material";
import Link from "next/link";
import DarkButton from "../Button/DarkButton";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import Image from "next/image";
import FooterCTAForm from "../Forms/FooterCTAForm/FooterCTAForm";
export default function FooterCTA({ data }) {
  return (
    <ContainerStyled maxWidth="xl" className="row">
      <Box className="content-wrapper">
        <Image
          src={data.image.url}
          width={200}
          height={200}
          alt={data.image.alt ? data.image.alt : data.title}
        />
        <Typography variant="h3" component="h3">
          {data.title}
        </Typography>
        <Typography variant="h6" component="p">
          {data.description}
        </Typography>
      </Box>
      <Box className="form-wrapper">
        <FooterCTAForm title={data.formTitle} />
      </Box>
    </ContainerStyled>
  );
}
const ContainerStyled = styled(Container)`
  background: var(--material-theme-sys-light-on-primary-fixed-variant, #295000);
  margin: 40px auto;
  @media (min-width: 600px) {
    width: 95%;
    padding: 80px 40px;
  }

  padding: 40px 0 0 0;
  border-radius: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  @media (max-width: 1140px) {
    display: block;
  }
  .row {
  }
  .content-wrapper {
    @media (max-width: 1140px) {
      text-align: center;
      padding: 0 16px;
    }

    h3 {
      color: var(--material-theme-sys-light-primary-container, #aff66e);
      margin-top: 24px;
    }
    p {
      margin-top: 16px;
      color: var(--material-theme-sys-light-primary-container, #aff66e);
      @media (max-width: 1140px) {
        align: center;
      }
    }
    a {
      margin-top: 24px;
      display: inline-block;
    }
  }
  .form-wrapper {
    @media (max-width: 1140px) {
      margin-top: 32px;
    }
  }
`;
