import DarkButton from "@/component/Button/DarkButton";
import OutlinedDarkButton from "@/component/Button/OutlinedDarkButton";
import { Box, Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";
import Video from "@/component/BreakSection/Video/Video";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
export default function HomeServiceCard({
  title,
  subtitle,
  videoFile,
  placeholderImage,
  cta1,
  cta2,
}) {
  const icon =
    cta2.link === "/book-appointment"
      ? CalendarMonthRoundedIcon
      : AssignmentOutlinedIcon;
  return (
    <ContainerStyled className="card-wrapper" elevation={2}>
      <Typography variant="h3" component="h2" align="center">
        {title}
      </Typography>
      <Typography variant="h5" component="h3" align="center">
        {subtitle}
      </Typography>
      <div className="cta-wrapper">
        <Link href={`${cta1.link}`}>
          <OutlinedDarkButton>{cta1.label} </OutlinedDarkButton>
        </Link>
        <Link href={`${cta2.link}`}>
          <DarkButton icon={icon} startIcon={true}>
            {cta2.label}
          </DarkButton>
        </Link>
      </div>
      <Box className="video-wrapper">
        <div className="outline">
          <Video
            className="video"
            placeholderImage={
              placeholderImage.sizes["2048x2048"]
                ? placeholderImage.sizes["2048x2048"]
                : placeholderImage.sizes.large
            }
            videoFile={videoFile}
            borderRadius={true}
          />
        </div>
      </Box>
    </ContainerStyled>
  );
}
const ContainerStyled = styled(Paper)`
  background: var(--light-primary-container, #aff66e);
  border-radius: 40px;
  padding: 32px 16px;
  @media (max-width: 600px) {
    border-radius: 16px;

    position: relative;
  }
  h2 {
    color: var(--light-on-primary-fixed-variant, #295000);
  }
  h3 {
    margin-top: 8px;
    color: var(--light-on-primary-fixed-variant, #295000);
  }
  .cta-wrapper {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    gap: 16px;

    flex-wrap: wrap;
  }

  .video-wrapper {
    margin-top: 24px;

    .video {
    }
  }
`;
