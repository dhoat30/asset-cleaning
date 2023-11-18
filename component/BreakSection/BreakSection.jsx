import React from "react";
import Video from "./Video/Video";
import styled from "@emotion/styled";
import { Container, Typography, Box } from "@mui/material";
import Link from "next/link";
import DarkButton from "../Button/DarkButton";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

export default function BreakSection({ data }) {
  console.log(data);
  return (
    <Section>
      <Container maxWidth="xl" className="row">
        <Box className="content-wrapper">
          <Typography variant="h3" component="h3">
            {data.title}
          </Typography>
          <Typography variant="h6" component="p">
            {data.description}
          </Typography>
          <Link href={data.cta.link}>
            <DarkButton icon={CalendarMonthRoundedIcon} startIcon={true}>
              {data.cta.label}
            </DarkButton>
          </Link>
        </Box>
        <Box className="video-wrapper">
          <div className="outline">
            <Video
              className="video"
              placeholderImage={
                data.placeholderImage.sizes["2048x2048"]
                  ? data.placeholderImage.sizes["2048x2048"]
                  : data.placeholderImage.sizes.large
              }
              videoFile={data.video}
            />
          </div>
        </Box>
      </Container>
    </Section>
  );
}
const Section = styled.section`
  background: var(--material-theme-sys-light-primary-container, #aff66e);
  padding: 80px 0;
  margin: 40px 0;
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    @media (max-width: 1140px) {
      display: block;
    }
  }
  .content-wrapper {
    h3 {
      color: var(--material-theme-sys-light-on-primary-fixed-variant, #295000);
    }
    p {
      margin-top: 16px;
      color: var(--material-theme-sys-light-on-primary-fixed-variant, #295000);
    }
    a {
      margin-top: 24px;
      display: inline-block;
    }
  }
  .video-wrapper {
    @media (max-width: 1140px) {
      margin-top: 32px;
    }
    .video {
      left: -24px;
      bottom: -24px;
      @media (max-width: 1140px) {
        left: -8px;
        bottom: -8px;
      }
    }
    .outline {
      border: 3px solid
        var(--material-theme-sys-light-on-primary-fixed-variant, #295000);
    }
  }
`;
