"use client";
import React from "react";
import styled from "@emotion/styled";
import { Container, Typography, Box, Paper } from "@mui/material";
import Loading from "@/app/loading";
export default function HtmlPageTemplate({ pageData }) {
  console.log(pageData);
  return (
    <Paper elevation={1}>
      <ContainerStyled maxWidth="xl">
        <Box className="title">
          <Typography variant="h2" component="h1" color="white">
            {pageData.title.rendered}
          </Typography>
        </Box>

        <Box className="content">
          <Typography
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={{ __html: pageData.content.rendered }}
          ></Typography>
        </Box>
      </ContainerStyled>
    </Paper>
  );
}
const ContainerStyled = styled(Container)`
  padding-top: 80px;
  padding-bottom: 80px;
  h1 {
    color: black;
  }
  .content {
    strong {
      color: black;
    }
    h2 {
      font-size: 2rem;
      margin-bottom: 8px;
      margin-top: 32px;
    }
  }
`;
