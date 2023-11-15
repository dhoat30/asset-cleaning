import React from "react";
import styled from "@emotion/styled";
import { Container, Typography, Box } from "@mui/material";
import Link from "next/link";
import DarkButton from "../Button/DarkButton";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import Video from "../BreakSection/Video/Video";
export default function WhyChooseUsSection({ data, title, subtitle }) {
  return (
    <Section>
      <Box className="title-wrapper">
        <Typography variant="h6" component="p" align="center">
          {subtitle}
        </Typography>
        <Typography variant="h3" component="h3" align="center">
          {title}
        </Typography>
      </Box>
      <Box className="cards-wrapper">
        {data.map((item, index) => {
          const isOdd = index % 2 !== 0;
          return (
            <div className={`card ${isOdd ? "odd" : "even"}`} key={index}>
              <Container className="content-wrapper row" maxWidth="xl">
                <Typography
                  variant="h5"
                  component="h4"
                  sx={{ fontWeight: 900 }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body1" component="p">
                  {item.description}
                </Typography>
              </Container>
              <div className="video-wrapper">
                <Video
                  videoFile={item.video.video_file}
                  placeholderImage={item.video.placeholder_image}
                />
              </div>
            </div>
          );
        })}
      </Box>
    </Section>
  );
}

const Section = styled.section`
  padding: 80px 0 0 0;
  margin: 40px 0;
  background: var(--material-theme-sys-dark-primary-container, #295000);
  border-radius: 40px 40px 0 0;
  .row {
  }
  .card {
    display: flex;
    /* grid-template-columns: 1fr 1fr; */
    background: var(--material-theme-sys-light-primary-container, #aff66e);
    align-items: center;
    &:nth-of-type(odd) {
      flex-direction: row-reverse;
    }
  }
  .title-wrapper {
    margin-bottom: 40px;
    h3 {
      color: var(--material-theme-sys-light-primary-container, #aff66e);
    }
    p {
      color: var(--material-theme-sys-light-primary-container, #aff66e);
    }
  }
  .content-wrapper {
    width: 50%;
    h4 {
      color: var(--material-theme-sys-dark-primary-container, #295000);
      letter-spacing: 0.04rem;
    }
    p {
      margin-top: 8px;
      color: var(--material-theme-sys-dark-primary-container, #295000);
    }
  }
  .video-wrapper {
    width: 50%;
    height: 100%;
  }
`;
