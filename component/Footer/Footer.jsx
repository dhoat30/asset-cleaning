"use client";
import React from "react";
import FooterCTA from "./FooterCTA";
import { Box, Container, Typography, Paper } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import IconCTA from "./IconCTA";
import {
  commercialCleaningLinks,
  quickLinks,
  residentialCleaningLinks,
} from "@/utils/footerLinks";

export default function Footer({ optionsData, showCTA }) {
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
  console.log(optionsData.member_logos[0].logo);
  return (
    <>
      {showCTA && <FooterCTA data={ctaData} />}

      <BoxStyled elevation={5}>
        <Container maxWidth="xl" className="row">
          <Box className="column">
            <Link href="/">
              <Image
                src="/logo.png"
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
            <Box className="members-logos-wrapper">
              {optionsData.member_logos.map((item, index) => {
                return (
                  <Image
                    key={index}
                    src={item.logo.url}
                    width={134}
                    height={40}
                    alt={item.logo.alt}
                  />
                );
              })}
            </Box>
          </Box>
          <Box className="column links-wrapper">
            <Typography variant="h6" component="h6">
              Quick Links
              {quickLinks.map((item, index) => {
                return (
                  <Link href={item.url} key={index}>
                    <Typography variant="body1" component="span">
                      {item.label}
                    </Typography>
                  </Link>
                );
              })}
            </Typography>
          </Box>
          <Box className="column links-wrapper">
            <Typography variant="h6" component="h6">
              Commercial Cleaning
              {commercialCleaningLinks.map((item, index) => {
                return (
                  <Link href={item.url} key={index}>
                    <Typography variant="body1" component="span">
                      {item.label}
                    </Typography>
                  </Link>
                );
              })}
            </Typography>
          </Box>
          <Box className="column links-wrapper">
            <Typography variant="h6" component="h6">
              Residential Cleaning
              {residentialCleaningLinks.map((item, index) => {
                return (
                  <Link href={item.url} key={index}>
                    <Typography variant="body1" component="span">
                      {item.label}
                    </Typography>
                  </Link>
                );
              })}
            </Typography>
          </Box>
        </Container>
      </BoxStyled>
      <CopyRight className="row">
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
const BoxStyled = styled(Paper)`
  padding: 40px 0;
  background: var(--material-theme-sys-light-surface-container, #efeee7);

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
    @media (max-width: 1000px) {
      gap: 40px;
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 850px) {
      gap: 40px;
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 600px) {
      gap: 40px;
      grid-template-columns: 1fr;
    }
    .column {
      .contact-details-wrapper {
        margin: 0;
        padding: 0;
      }
      .members-logos-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin-top: 16px;
      }
    }
    .links-wrapper {
      h6 {
        font-weight: 500;
        color: var(--material-theme-sys-light-on-surface-variant, #44483e);
      }
      a {
        display: block;
        margin: 8px 0;
        color: var(--material-theme-sys-light-on-surface-variant, #44483e);
        &:hover {
          text-decoration: underline;
          color: black;
        }
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
