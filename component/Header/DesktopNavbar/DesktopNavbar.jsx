"use client";
import React, { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import { headerLinks } from "@/utils/headerLinks";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Paper } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import styled from "@emotion/styled";
function DesktopNavbar() {
  const [showMenu, setShowMenu] = useState(-1);
  const menuRef = useRef(null);

  // drop down logic
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const showDropdown = (event, index) => {
    setTimeout(() => {
      setShowMenu(index);
    }, 200); // Delay in milliseconds
  };
  const hideDropdown = (event, index) => {
    event.preventDefault();
    setTimeout(() => {
      setShowMenu(-1);
    }, 200); // Del
  };

  const toggleDropdown = (event, index) => {
    event.preventDefault();
    setShowMenu(index === showMenu ? -1 : index);
  };

  // render menu items
  const menuItems = headerLinks.map((item, index) => {
    return (
      <MenuItem
        className="link"
        component="li"
        key={index}
        sx={{ color: "white", display: "block", position: "relative" }}
        onMouseLeave={
          item.subLinks ? (event) => hideDropdown(event, index) : null
        }
        onMouseEnter={
          item.subLinks ? (event) => showDropdown(event, index) : null
        }
        onClick={item.subLinks ? (event) => toggleDropdown(event, index) : null}
      >
        <Link href={item.url}>
          <Typography
            component="span"
            variant="button"
            align="center"
            sx={{ fontWeight: "400" }}
          >
            {item.label}
          </Typography>
          {item.subLinks && (
            <KeyboardArrowDownRoundedIcon
              className={`${showMenu === index && "arrow-up"} arrow `}
            />
          )}
        </Link>

        {item.subLinks && (
          <Box
            component="ul"
            className={`${
              showMenu === index ? "block" : "hidden"
            } sublinks-container`}
            sx={{
              position: "absolute",
              left: "-16px",
              width: "250px",
              paddingLeft: 0,
              display: `${showMenu === index ? "block" : "none"} `,
            }}
          >
            <Paper sx={{ background: "white" }}>
              {item.subLinks.map((subLink, subIndex) => (
                <Box component="li" key={subIndex} className="text-left">
                  <Link href={subLink.url}>
                    <Typography
                      className="subLink"
                      component="span"
                      variant="body1"
                      sx={{
                        display: "block",
                        color: "black",
                        py: 2,
                        pr: 4,
                        pl: 4,
                        "&:hover": {
                          color: "var(--material-theme-sys-light-on-surface)",
                        },
                      }}
                    >
                      {subLink.label}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Paper>
          </Box>
        )}
      </MenuItem>
    );
  });
  return (
    <>
      <AppBarContainer
        position="static"
        sx={{
          display: { xs: "none", lg: "block" },
          background: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {/* logo  */}
            <Link href="/">
              <Image
                src="/logo.png"
                width="192"
                height="42"
                alt="Asset Cleaning Logo"
                style={{ objectFit: "cover" }}
              />
            </Link>
            {/* menu */}
            <Box
              component="ul"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                margin: 0,
              }}
            >
              {menuItems}
              <Link
                href="https://speed.webduel.co.nz/get-a-quote"
                target="_blank"
              >
                <Button size="large" variant="contained">
                  Get instant quote
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBarContainer>
    </>
  );
}
export default DesktopNavbar;

const AppBarContainer = styled(AppBar)`
  position: relative;
  z-index: 100;
  .link {
    > a {
      display: flex;
      align-items: center;
      padding: 16px 24px;
      color: var(--material-theme-sys-dark-on-primary, #1b3700);

      &:hover {
        color: var(--material-theme-sys-dark-on-surface);
        svg {
          color: var(--material-theme-sys-dark-on-surface);
        }
      }
    }
  }
  .sublinks-container {
    li {
      &:hover {
        span {
          color: var(--material-theme-sys-light-primary);
        }
      }
    }
  }
`;
