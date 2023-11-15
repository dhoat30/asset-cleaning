import React from "react";
import styled from "@emotion/styled";
import { Container, Typography, Box, Paper } from "@mui/material";
import Link from "next/link";
import DarkButton from "../Button/DarkButton";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
export default function CheckListSection({
  title,
  subtitle,
  checklistsArray,
  cta,
}) {
  return (
    <ContainerStyled maxWidth="xl" className="row">
      <Box className="content-wrapper">
        <Typography variant="h6" component="p" align="center">
          {title}
        </Typography>
        <Typography variant="h3" component="h3" align="center">
          {subtitle}
        </Typography>
      </Box>
      <Box className="checklist-wrapper">
        {checklistsArray.map((item, index) => {
          return (
            <Paper key={index} className="checklist" variant="outlined">
              <Typography variant="h5" component="h5">
                {item.title}
              </Typography>
              <ul className="list">
                {item.checklist_item.map((item, itemIndex) => (
                  <Typography key={itemIndex} variant="body2" component="li">
                    <TaskAltRoundedIcon sx={{ color: "#396A00" }} />
                    <span>{item.label}</span>{" "}
                  </Typography>
                ))}
              </ul>
            </Paper>
          );
        })}
      </Box>

      <Link href={cta.link} className="cta">
        <DarkButton icon={CalendarMonthRoundedIcon} startIcon={true}>
          {cta.label}
        </DarkButton>
      </Link>
    </ContainerStyled>
  );
}
const ContainerStyled = styled(Container)`
  padding-top: 80px;
  padding-bottom: 80px;
  p {
    margin-bottom: 8px;
    color: var(--material-theme-sys-dark-on-primary-fixed-variant, #295000);
  }
  .checklist-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    margin-top: 40px;
    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 550px) {
      grid-template-columns: 1fr;
    }
    .checklist {
      border-radius: 12px;
      background: none;
      padding: 16px 16px;
      .list {
        margin: 16px 0 0 0;
        padding: 0;
        li {
          margin: 8px 0;
          display: flex;
          align-items: flex-start;
          gap: 6px;
        }
      }
    }
  }
  .cta {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
`;
