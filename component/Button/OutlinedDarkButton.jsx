import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

export default function OutlinedDarkButton({ children }) {
  return <ButtonStyled variant="outlined">{children} </ButtonStyled>;
}
const ButtonStyled = styled(Button)`
  border: 1px solid
    var(--material-theme-sys-dark-on-primary-fixed-variant, #295000);
  color: var(--material-theme-sys-dark-on-primary-fixed-variant, #295000);
  &:hover {
    border: 1px solid #1b3700;
    color: #1b3700;
  }
`;
