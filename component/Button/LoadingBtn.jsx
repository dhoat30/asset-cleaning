import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import styled from "@emotion/styled";
import DoneIcon from "@mui/icons-material/Done";
function LoadingBtn({
  align,
  isLoading,
  onClick,
  isSuccess,
  className,
  label,
  children,
  newSubmission,
  id,
}) {
  let labelText = children ? children : "Submit";
  return (
    <LoadingButtonStyle
      sx={{
        borderRadius: "50px",
      }}
      className={className}
      id={id}
      onClick={onClick}
      align={align}
      size="large"
      variant="contained"
      disableElevation
      loading={isLoading}
      disabled={isSuccess}
    >
      {isSuccess && newSubmission ? <DoneIcon /> : labelText}
    </LoadingButtonStyle>
  );
}

export default LoadingBtn;
const LoadingButtonStyle = styled(LoadingButton)`
  margin: ${(props) => (props.align === "right" ? "16px 0 0 auto" : "16px 0")};
  display: block;
  .MuiLoadingButton-loadingIndicator {
    top: 15px;
  }
  span {
    color: #c5c0ff;
  }
  svg {
    path {
      fill: var(--dark-on-primary, #3c2f00);
    }
  }
`;
