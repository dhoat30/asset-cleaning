import React from "react";
import styled from "@emotion/styled";
import { Container, Typography, Paper } from "@mui/material";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import RecyclingOutlinedIcon from "@mui/icons-material/RecyclingOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import AssuredWorkloadOutlinedIcon from "@mui/icons-material/AssuredWorkloadOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function USP({ className }) {
  const matches = useMediaQuery("(min-width:1200px)");

  return (
    <>
      <ContainerStyled>
        <Container maxWidth="xl" component="div" className="row">
          <Paper variant="outlined">
            <InventoryOutlinedIcon />
            <Typography
              variant="h6"
              component="span"
              align="center"
              className="subtitle"
            >
              Regular Audits
            </Typography>
          </Paper>
          <Paper variant="outlined">
            <GroupOutlinedIcon />
            <Typography
              variant="h6"
              component="span"
              align="center"
              className="subtitle"
            >
              Expert Team
            </Typography>
          </Paper>
          <Paper variant="outlined">
            <VerifiedUserOutlinedIcon />
            <Typography
              variant="h6"
              component="span"
              align="center"
              className="subtitle"
            >
              Competitive Prices
            </Typography>
          </Paper>
          <Paper variant="outlined">
            <RecyclingOutlinedIcon />
            <Typography
              variant="h6"
              component="span"
              align="center"
              className="subtitle"
            >
              Eco-Friendly Cleaning
            </Typography>
          </Paper>
          <Paper variant="outlined">
            <SpeedOutlinedIcon />
            <Typography
              variant="h6"
              component="span"
              align="center"
              className="subtitle"
            >
              Quick Resolution
            </Typography>
          </Paper>
        </Container>
      </ContainerStyled>
    </>
  );
}
const ContainerStyled = styled.section`
  background: white;
  @media (max-width: 1200px) {
    display: none;
  }
  .row {
    display: flex;

    display: flex;
    justify-content: center;
    gap: 16px;
    padding: 16px 0;
    .MuiPaper-root {
      background: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 16px;
      width: 200px;
      transition: all 0.3s ease;
      &:hover {
        scale: 1.1;
      }
      span {
        color: black;
      }
    }
  }
  svg {
    margin: 0 auto;
    width: 50px;
    height: 50px;
    margin-bottom: 8px;
    @media (max-width: 500px) {
      width: 35px;
      height: 35px;
    }
    path {
      fill: var(--material-theme-sys-dark-on-primary-fixed-variant, #295000);
    }
  }
  text-align: center;
  span {
    @media (max-width: 500px) {
      font-size: var(--material-theme--body--medium);
    }
  }
`;
