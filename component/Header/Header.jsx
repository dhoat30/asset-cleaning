import React from "react";
import TopBar from "./TopBar";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

export default function Header({ optionsData }) {
  return (
    <div>
      <TopBar
        email={optionsData.contact_info.email_address}
        phone={optionsData.contact_info.top_bar_phone_number}
        facebookURL={optionsData.contact_info.facebook_url}
        youtubeURL={optionsData.contact_info.youtube_url}
      />
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
}
