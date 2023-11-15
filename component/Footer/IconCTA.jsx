import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SendIcon from "@mui/icons-material/Send";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import PhoneCircleIcon from "../Icons/PhoneCircleIcon";
import Link from "next/link";
import EmailCircleIcon from "../Icons/EmailCircleIcon";

export default function IconCTA({ phone, email, street, city, postCode }) {
  return (
    <>
      <Container href={`tel: ${phone}`}>
        <PhoneCircleIcon />
        <Typography variant="body1" component="span">
          {phone}
        </Typography>
      </Container>
      <Container href={`mailto: ${email}`}>
        <EmailCircleIcon />
        <Typography variant="body1" component="span">
          {email}
        </Typography>
      </Container>
      <ListStyled>
        <EmailCircleIcon />
        <div>
          <Typography variant="body1" component="span">
            {street}
          </Typography>
          <Typography variant="body1" component="span">
            {city} {postCode}
          </Typography>
        </div>
      </ListStyled>
    </>
  );
}
const Container = styled(Link)`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 24px 0;
  span {
    color: var(--material-theme-sys-dark-on-surface, #c7c7c0);
    &:hover {
      color: #94d955;
    }
  }
`;
const ListStyled = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  span {
    display: block;
    color: var(--material-theme-sys-dark-on-surface, #c7c7c0);
    &:hover {
      color: #94d955;
    }
  }
`;
