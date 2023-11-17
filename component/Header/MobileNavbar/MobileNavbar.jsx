"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer";

function MobileNavbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBarStyled
        position="static"
        sx={{
          display: {
            xs: "block",
            lg: "none",
            background: "var(--material-theme-sys-light-surface, #FAFAF2)",
          },
        }}
      >
        <Container maxWidth="xl" sx={{ padding: "0 6px !important" }}>
          <Toolbar disableGutters>
            <Box sx={{ width: "100%" }} id="menu-container">
              <div className="menu-logo-wrapper">
                <IconButton
                  size="small"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
                <Image
                  src="/logo.png"
                  width="128"
                  height="28"
                  alt="logo"
                  quality={100}
                />
              </div>

              <MobileDrawer
                anchorElNav={anchorElNav}
                handleCloseNavMenu={handleCloseNavMenu}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBarStyled>
    </>
  );
}
export default MobileNavbar;
const AppBarStyled = styled(AppBar)`
  .menu-logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
