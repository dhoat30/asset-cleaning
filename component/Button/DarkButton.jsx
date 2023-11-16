import React from "react";
import Button from "@mui/material/Button";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import styled from "@emotion/styled";

export default function DarkButton({
  icon: Icon,
  children,
  startIcon,
  className,
  variant,
}) {
  return (
    <ButtonStyled
      className={className}
      sx={{
        background:
          "var(--material-theme-sys-dark-on-primary-fixed-variant, #295000)",
      }}
      variant="contained"
      startIcon={startIcon && <Icon />}
    >
      {children}
    </ButtonStyled>
  );
}
const ButtonStyled = styled(Button)`
  color: var(--material-theme-sys-light-primary-container, #aff66e);
  span {
    color: var(--material-theme-sys-light-primary-container, #aff66e);
  }
  :hover {
    background: var(--material-theme-sys-dark-on-primary, #1b3700);
  }
`;
