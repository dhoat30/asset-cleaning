"use client";
import { useState, useRef, useEffect } from "react";
import { styled as style, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styled from "@emotion/styled";
import MenuIcon from "../../Icons/MenuIcon";
import Link from "next/link";
import ArrowIcon from "../../Icons/ArrowIcon";
import { headerLinks } from "@/utils/headerLinks";
import Image from "next/image";
import { usePathname } from "next/navigation";
const drawerWidth = 300;

const DrawerHeader = style("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function MobileNavbar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(-1);
  const menuRef = useRef(null);
  const pathname = usePathname();
  // Function to check if the path matches the current page
  const isActive = (path) => {
    return pathname === path;
  };

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

  const toggleDropdown = (event, index) => {
    event.preventDefault();
    setShowMenu(index === showMenu ? -1 : index);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = headerLinks.map((item, index) => {
    return (
      <li
        className="flex-auto text-center relative parent-list-item"
        key={index}
        onClick={pathname === item.url ? handleDrawerClose : null}
        // onMouseLeave={() => setShowMenu({ [index]: false })}
      >
        <Link
          href={item.url}
          className="parent-link"
          onClick={
            item.subLinks ? (event) => toggleDropdown(event, index) : null
          }
        >
          {item.label}
          {item.subLinks && <ArrowIcon className="arrow " />}
        </Link>

        {item.subLinks && (
          <ul
            className={`${
              showMenu === index ? "block" : "hidden"
            }  bg-primary-dark text-surface-dark top-8  dropdown`}
          >
            {item.subLinks.map((subLink, subIndex) => (
              <li key={subIndex} className="text-left child-list-item">
                <Divider
                  key={subIndex + 100}
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}
                />
                <Link
                  href={subLink.url}
                  className="child-link"
                  onClick={handleDrawerClose}
                >
                  {subLink.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Divider
          key={index + 122}
          light={true}
          style={{ borderColor: "rgba(255,255,255,0.5)" }}
        />
      </li>
    );
  });

  return (
    <>
      <AppBarStyled
        position="fixed"
        sx={{
          display: {
            xs: "block",
            lg: "none",
            background: "var(--light-surface, #FAFAF2)",
          },
        }}
      >
        <Container maxWidth="xl" sx={{ padding: "0 6px !important" }}>
          <Toolbar disableGutters>
            <Box sx={{ width: "100%" }} id="menu-container">
              <div className="menu-logo-wrapper">
                <IconButton
                  size="small"
                  aria-label="Hamburger Icon to Open the menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleDrawerOpen}
                  color="inherit"
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
                <Link href="/">
                  <Image
                    src="/logo.png"
                    width="128"
                    height="28"
                    alt="logo"
                    quality={100}
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBarStyled>
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          zIndex: "100",
        }}
        role="presentation"
        id="menu-appbar"
      >
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "var(--dark-on-primary-fixed-variant, #295000)",
            },
          }}
          anchor="left"
          open={open}
          onClose={handleDrawerClose}
        >
          <DrawerHeader onClose={handleDrawerClose}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIconStyle />
              ) : (
                <ChevronRightIconStyle />
              )}
            </IconButton>
          </DrawerHeader>
          <ListContainer>{menuItems}</ListContainer>
        </Drawer>
      </Box>
    </>
  );
}
const AppBarStyled = styled(AppBar)`
  top: 40px;
  .menu-logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  .block {
    display: block;
    margin: 0;
    padding: 0;
  }
  .hidden {
    margin: 0;
    padding: 0;
    display: none;
  }
  .parent-list-item {
    .parent-link {
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      display: block;
      text-align: left;
      padding: 16px 16px;
      color: white;
      font-weight: 500;
      letter-spacing: 0.005rem;
      position: relative;
      &:hover {
        color: #ebebeb;
      }
    }
    svg {
      position: absolute;
      right: 24px;
      top: 24px;
      transform: rotate(180deg);
      path {
        fill: white !important;
      }
    }
  }
  .child-list-item {
    .child-link {
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      display: block;
      text-align: left;
      padding: 16px 40px;
      color: #dedede;
      font-weight: 400;
      position: relative;
      &:hover {
        color: #ebebeb;
      }
    }
  }
`;
const ChevronLeftIconStyle = styled(ChevronLeftIcon)`
  path {
    fill: white !important;
  }
`;
const ChevronRightIconStyle = styled(ChevronLeftIcon)`
  path {
    fill: white !important;
  }
`;
