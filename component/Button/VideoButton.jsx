import React from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import styled from "@emotion/styled";
import PlayIcon from "../Icons/PlayIcon";
import Dialog from "@mui/material/Dialog";
import VideoModal from "../VideoModal/VideoModal";

export default function VideoButton({ videoID }) {
  console.log(videoID);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ButtonStyled onClick={handleClickOpen}>
        <PlayIcon />
      </ButtonStyled>
      <ModalWrapper>
        <Dialog
          fullWidth={true}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <VideoModal videoID={videoID} />
        </Dialog>
      </ModalWrapper>
    </>
  );
}
const ButtonStyled = styled.div`
  display: flex;
  align-items: center;
`;
const ModalWrapper = styled.div``;
