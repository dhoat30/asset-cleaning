"use client";
import React from "react";
import TopBar from "./TopBar";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styled from "@emotion/styled";
import Link from "next/link";
export default function Header({ optionsData }) {
  return (
    <div id="header">
      <TopBar
        email={optionsData.contact_info.email_address}
        phone={optionsData.contact_info.top_bar_phone_number}
        facebookURL={optionsData.contact_info.facebook_url}
        youtubeURL={optionsData.contact_info.youtube_url}
      />
      <DesktopNavbar />
      <MobileNavbar />
      <Link href="#header" style={{ scrollBehavior: "smooth" }}>
        <FabStyle color="primary" aria-label="add">
          <ArrowUpwardIcon />
        </FabStyle>
      </Link>
    </div>
  );
}

const FabStyle = styled(Fab)`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;
