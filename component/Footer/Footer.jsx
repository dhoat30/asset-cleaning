"use client";
import React from "react";
import FooterCTA from "./FooterCTA";
import { Box, Container, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import IconCTA from "./IconCTA";

export default function Footer({ optionsData }) {
  console.log(optionsData.contact_info);
  const ctaData = {
    title: optionsData.footer.footer_quality_cta.title,
    description: optionsData.footer.footer_quality_cta.description,
    image: optionsData.footer.footer_quality_cta.badge,
    formTitle: optionsData.footer.footer_quality_cta.form_title,
  };
  const phone = optionsData.contact_info.top_bar_phone_number;
  const email = optionsData.contact_info.email_address;
  const street = optionsData.contact_info.street_address;
  const city = optionsData.contact_info.city;
  const postCode = optionsData.contact_info.post_code;
  console.log(phone);
  return (
    <>
      <FooterCTA data={ctaData} />
      <BoxStyled>
        <Container maxWidth="xl" className="row">
          <Box className="column">
            <Link href="/">
              <Image
                src="/logo-dark.svg"
                width="294"
                height="65"
                alt="Asset Cleaning Logo"
              />
            </Link>
            <ul className="contact-details-wrapper">
              <IconCTA
                phone={phone}
                email={email}
                street={street}
                city={city}
                postCode={postCode}
              />
            </ul>
          </Box>
        </Container>
      </BoxStyled>
      <CopyRight maxWidth="xl" className="row">
        <Typography variant="body2" component="p">
          Challenge Cleaning Ltd. t/a Asset Cleaning & Property Services © 2023.
          All Rights Reserved | Built By
          <a href="https://webduel.co.nz" target="_blank" rel="nofollow">
            Web<strong>DUEL</strong>
          </a>
        </Typography>
      </CopyRight>
    </>
  );
}
const BoxStyled = styled(Box)`
  padding: 40px 0;
  background: var(--material-theme-ref-primary-primary-12, #102500);
  .row {
    .column {
      .contact-details-wrapper {
        margin: 0;
        padding: 0;
      }
    }
  }
`;
const CopyRight = styled(Box)`
  background: var(--material-theme-ref-primary-primary-5, #071400);
  padding: 16px 0;
  text-align: center;
  p {
    color: white;
  }
  a {
    color: white;
    &:hover {
      text-decoration: underline;
    }
    strong {
      color: white;
      font-weight: 900;
      letter-spacing: 0;
    }
  }
`;
