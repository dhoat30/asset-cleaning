import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import { headerLinks } from "@/utils/headerLinks";
import Drawer from "@mui/material/Drawer";

export default function MobileDrawer({ anchorElNav, handleCloseNavMenu }) {
  const [showMenu, setShowMenu] = useState(-1);
  const toggleDropdown = (event, index) => {
    event.preventDefault();
    setShowMenu(index === showMenu ? -1 : index);
  };

  return (
    <Drawer open={anchorElNav} onClose={handleCloseNavMenu}>
      {headerLinks.map((item, index) => (
        <MenuItem key={index} onClick={handleCloseNavMenu}>
          <Link href={item.url}>
            <Typography textAlign="center" component="span">
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
    </Drawer>
  );
}
