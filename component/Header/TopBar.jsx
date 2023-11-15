"use client";
import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
export default function TopBar({ email, phone, facebookURL, youtubeURL }) {
  return (
    <Section>
      <Container maxWidth="xl" className="row">
        <Box component="div" className="contact-wrapper">
          <Link href={`tel: ${phone}`}>
            <LocalPhoneRoundedIcon
              color="var(--material-theme-sys-dark-on-secondary-container)"
              //   fontSize="small"
            />
            <Typography variant="button" component="span">
              {phone}
            </Typography>
          </Link>
          <Link href={`mailto: ${email}`}>
            <EmailRoundedIcon
              color="var(--material-theme-sys-dark-on-secondary-container)"
              //   fontSize="small"
            />
            <Typography
              variant="button"
              component="span"
              style={{ textTransform: "lowercase" }}
            >
              {email}
            </Typography>
          </Link>
        </Box>
        <Box component="div" className="social-wrapper">
          {facebookURL && (
            <Link href={`${facebookURL}`} target="_blank">
              <FacebookRoundedIcon color="var(--material-theme-sys-dark-on-secondary-container)" />
            </Link>
          )}

          {youtubeURL && (
            <Link href={`${youtubeURL}`} target="_blank">
              <YouTubeIcon color="var(--material-theme-sys-dark-on-secondary-container)" />
            </Link>
          )}
        </Box>
      </Container>
    </Section>
  );
}
const Section = styled.section`
  background: var(--material-theme-sys-dark-secondary-container, #004c69);
  padding: 8px 0;
  a {
    color: var(--material-theme-sys-dark-on-secondary-container);
    display: flex;
    align-items: center;
    gap: 8px;
    span {
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
  .row {
    display: flex;
    justify-content: space-between;
  }
  .contact-wrapper {
    display: flex;
    gap: 40px;
    @media (max-width: 600px) {
      gap: 16px;
    }
  }
  .social-wrapper {
    display: flex;
    gap: 16px;
  }
`;
