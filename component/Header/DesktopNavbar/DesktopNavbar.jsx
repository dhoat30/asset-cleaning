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
import { usePathname } from "next/navigation";

function DesktopNavbar() {
  const [showMenu, setShowMenu] = useState(-1);
  const menuRef = useRef(null);
  const pathname = usePathname();
  // Function to check if the path matches the current page
  const isActive = (path) => {
    return pathname === path;
  };
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
    event.preventDefault();
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
    // setShowMenu(index === showMenu ? -1 : index);
  };

  // render menu items
  const menuItems = headerLinks.map((item, index) => {
    return (
      <MenuItem
        className="list-item"
        component="li"
        key={index}
        sx={{ color: "white", display: "block", position: "relative" }}
        onMouseLeave={
          item.subLinks ? (event) => hideDropdown(event, index) : null
        }
        onMouseEnter={
          item.subLinks ? (event) => showDropdown(event, index) : null
        }
      >
        <Link
          className={isActive(item.url) ? "active parent-link" : "parent-link"}
          href={item.url}
          onClick={
            item.subLinks ? (event) => toggleDropdown(event, index) : null
          }
        >
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
                  <Link
                    href={subLink.url}
                    className={
                      isActive(subLink.url) ? "active child-link" : "child-link"
                    }
                  >
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
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* logo  */}
            <Link href="/">
              <Image
                src="/logo.png"
                width="192"
                height="42"
                quality={70}
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
              <Link href="/get-quote" target="_blank">
                <Button size="large" variant="contained">
                  GET A QUOTE
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
  .list-item {
    > .parent-link {
      display: flex;
      align-items: center;
      padding: 8px 4px;
      color: var(--material-theme-sys-dark-on-primary, #1b3700);
    }
    .parent-link.active {
      border-bottom: 2px solid
        var(--material-theme-sys-dark-on-primary, #1b3700);
    }
  }

  .sublinks-container {
    li {
      .child-link {
        span {
          color: var(--material-theme-sys-dark-on-primary, #1b3700);
        }
      }
      .child-link.active {
        span {
          color: var(--material-theme-sys-light-primary-container, #aff66e);
          background: var(--material-theme-sys-dark-on-primary, #1b3700);
        }
      }
      &:hover {
        span {
          color: var(--material-theme-sys-light-primary);
        }
      }
    }
  }
`;
