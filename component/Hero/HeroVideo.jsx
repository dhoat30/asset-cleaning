import styled from "@emotion/styled";
import { Box, Container, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import DarkButton from "../Button/DarkButton";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import Link from "next/link";
import VideoButton from "../Button/VideoButton";
import Video from "../BreakSection/Video/Video";

export default function HeroVideo({ data }) {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <BoxStyled component="section">
      <Box className="image-wrapper">
        {/* {data.desktopImage && !matches && (
          <Image
            className="desktop"
            src={data.desktopImage.url}
            alt={data.title}
            fill
            priority={true}
          />
        )}
        {data.mobileImage && matches && (
          <Image
            className="mobile"
            src={data.mobileImage.url}
            alt={data.title}
            fill
          />
        )} */}
        <Video
          videoFile={data.videoFile}
          placeholderImage={
            data.desktopImage.sizes["2048x2048"]
              ? data.desktopImage.sizes["2048x2048"]
              : data.desktopImage.url
          }
          imagePriority={true}
        />
      </Box>
      <Container maxWidth="xl" className="row">
        <Paper
          className="content-wrapper"
          elevation={3}
          sx={{
            padding: "32px 16px",
            borderRadius: "16px",
            background: "var(--light-primary-container, #AFF66E)",
          }}
        >
          <Typography variant="h3" component="h1">
            {data.title}
          </Typography>
          <Typography variant="h6" component="h2">
            {data.description}
          </Typography>
          <Box className="button-wrapper">
            <Link href={data.cta.url}>
              <DarkButton icon={CalendarMonthRoundedIcon} startIcon={true}>
                {data.cta.label}
              </DarkButton>
            </Link>
            <VideoButton videoID={data.videoID} />
          </Box>
        </Paper>
      </Container>
    </BoxStyled>
  );
}
const BoxStyled = styled(Box)`
  @media (max-width: 1000px) {
    bottom: -100px;
    position: relative;
  }
  .image-wrapper {
    position: relative;
    width: 100%;

    @media (max-width: 1000px) {
      padding-bottom: 0;
      height: auto;
    }
    @media (max-width: 600px) {
      padding-bottom: 10%;
      height: auto;
    }
    img {
      object-fit: cover;
    }
  }

  .row {
    /* position: abs; */
    max-width: 650px;
    left: 12%;
    @media (max-width: 1700px) {
      left: 5%;
    }
    @media (max-width: 1536px) {
      left: 0;
    }
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    @media (max-width: 1000px) {
      top: -100px;

      position: relative;
      transform: translateY(0%);
    }
    .content-wrapper {
      h1 {
        color: var(--dark-on-primary-fixed-variant, #295000);
      }
      h2 {
        margin-top: 8px;
        color: var(--dark-on-primary-fixed-variant, #295000);
      }

      color: var(--dark-on-primary-fixed-variant, #295000);
    }
    .button-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 16px;
      flex-wrap: wrap;
    }
  }
`;
