import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
export default function CircleProcess() {
  return (
    <ContainerStyled maxWidth="xl">
      <Box className="head-wrapper">
        <Typography variant="h3" component="h3" align="center">
          Schedule Your Cleaning Appointment
        </Typography>
      </Box>
      <Box className="circle-wrapper">
        <div className="outer-circle">
          <Paper className="circle" elevation={3}>
            <Typography variant="h4" component="h4">
              1
            </Typography>
            <Typography variant="body1" component="p">
              Book Your Appointment
            </Typography>
          </Paper>
        </div>
      </Box>
    </ContainerStyled>
  );
}

const ContainerStyled = styled(Container)`
  height: 100vh;
  .circle-wrapper {
    .outer-circle {
      width: 330px;
      height: 330px;
      border: 3px solid var(--material-theme-sys-light-primary, #396a00);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .circle {
      background: var(--material-theme-sys-light-surface-bright, #fafaf2);
      border-radius: 50%;
      width: 300px;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`;
