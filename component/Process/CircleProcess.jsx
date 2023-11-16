import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
export default function CircleProcess({ title, subtitle, cardsArray }) {
  return (
    <ContainerStyled maxWidth="xl">
      <Box className="head-wrapper">
        <Typography variant="h6" component="p" align="center">
          {subtitle}
        </Typography>
        <Typography variant="h3" component="h3" align="center">
          {title}
        </Typography>
      </Box>
      <Box className="circle-wrapper">
        {cardsArray.map((item, index) => {
          return (
            <div className="outer-circle" key={index}>
              <Paper className="circle" elevation={3}>
                <Paper className="sequence-number" elevation={5}>
                  <Typography variant="h4" component="p" align="center">
                    {`0${index + 1}`}
                  </Typography>
                </Paper>
                <Typography variant="h5" component="h4" align="center">
                  {item.title}
                </Typography>
                <Typography variant="body1" component="p" align="center">
                  {item.description}
                </Typography>
              </Paper>
            </div>
          );
        })}
      </Box>
    </ContainerStyled>
  );
}

const ContainerStyled = styled(Container)`
  padding-top: 80px;
  padding-bottom: 80px;
  @media (max-width: 600px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .head-wrapper {
    p {
      margin-bottom: 8px;
      color: var(--material-theme-sys-dark-on-primary-fixed-variant, #295000);
    }
  }
  .circle-wrapper {
    max-width: 1200px;
    margin: 80px auto 0 auto;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 600px) {
      margin: 40px auto 0 auto;
    }
    h4 {
      color: var(--material-theme-sys-dark-on-primary-fixed-variant, #295000);
      padding: 0 8px;
    }
    p {
      margin-top: 8px;
      padding: 0 8px;
      color: var(--material-theme-sys-dark-on-primary-fixed-variant, #295000);
    }
    .outer-circle {
      width: 330px;
      height: 330px;
      border: 3px solid var(--material-theme-sys-light-primary, #396a00);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      @media (max-width: 400px) {
        width: 280px;
        height: 280px;
      }
      .sequence-number {
        border-radius: 50%;
        width: 84px;
        height: 84px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: -0px;
        p {
          margin-top: 0;
          background: var(--material-theme-sys-dark-primary, #94d955);
          padding: 16px;
          border-radius: 50%;
        }
      }
    }
    .circle {
      padding: 8px;
      background: var(--material-theme-sys-light-surface-bright, #fafaf2);
      border-radius: 50%;
      width: 292px;
      height: 292px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      @media (max-width: 400px) {
        width: 242px;
        height: 242px;
      }
    }
  }
`;
