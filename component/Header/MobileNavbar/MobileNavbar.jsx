"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import { headerLinks } from "@/utils/headerLinks";
import styled from "@emotion/styled";
import Image from "next/image";
const pages = ["Products", "Pricing", "Blog"];

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
        sx={{ display: { xs: "block", lg: "none" } }}
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
                <Image src="/logo.png" width="32" height="32" alt="logo" />
              </div>
              <Menu
                id="ul-list"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {headerLinks.map((item, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link href={item.url}>
                      <Typography
                        textAlign="center"
                        component="span"
                        color="white"
                      >
                        {item.label}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
                {/* <Link href="https://speed.webduel.co.nz/book-consultation">
                  <Button size="large" variant="contained">
                    Book free consultation
                  </Button>
                </Link> */}
              </Menu>
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
