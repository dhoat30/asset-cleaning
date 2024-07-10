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
  sectionID,
}) {
  return (
    <ContainerStyled
      component="section"
      maxWidth="xl"
      className="row"
      id={sectionID}
    >
      <Box className="content-wrapper">
        <Typography variant="h6" component="p" align="center">
          {subtitle}
        </Typography>
        <Typography variant="h3" component="h3" align="center">
          {title}
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
  @media (max-width: 600px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  p {
    margin-bottom: 8px;
    color: var(--dark-on-primary-fixed-variant, #295000);
  }
  .checklist-wrapper {
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr; */

    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    > div {
      width: calc(30% - 24px);
      @media (max-width: 1000px) {
        width: calc(45% - 24px);
      }
      @media (max-width: 650px) {
        width: calc(100%);
      }
    }

    .checklist {
      border-radius: 12px;
      background: none;
      padding: 16px 16px;
      background: var(--light-surface-container-lowest);
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
