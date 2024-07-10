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
        background: "var(--dark-on-primary-fixed-variant, #295000)",
      }}
      variant="contained"
      startIcon={startIcon && <Icon />}
      size="large"
    >
      {children}
    </ButtonStyled>
  );
}
const ButtonStyled = styled(Button)`
  color: var(--light-primary-container, #aff66e);
  span {
    color: var(--light-primary-container, #aff66e);
  }
  :hover {
    background: var(--dark-on-primary, #1b3700);
  }
`;
