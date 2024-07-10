"use client";
import React, { useState, useEffect, Suspense } from "react";
import ReactPlayer from "react-player/youtube";
import Image from "next/image";
import styled from "@emotion/styled";
import PlayIcon from "../Icons/PlayIcon";
import Container from "@mui/material/Container";
export default function Video({ videoID, placeholderImage, className }) {
  const [isClient, setIsClient] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false); // New state for tracking video load
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to load and play the video
  const handleImageClick = () => {
    setVideoLoaded(true);
  };
  return (
    <ContainerStyled className={className}>
      <div className="video-wrapper">
        {!videoLoaded && (
          <div className="img-wrapper">
            <Image
              onClick={handleImageClick}
              src={placeholderImage.url} // Replace with your placeholder image path
              fill
              alt="Video Thumbnail"
            />
            <ButtonStyled onClick={handleImageClick}>
              <PlayIcon />
            </ButtonStyled>
          </div>
        )}

        {videoLoaded && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoID}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
            width="100%"
            height="100%"
          />
        )}
      </div>
    </ContainerStyled>
  );
}
const ContainerStyled = styled.div`
  position: relative;

  .video-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
  }
  .img-wrapper {
    img {
      object-fit: cover;
    }
  }
`;
const ButtonStyled = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  svg {
    width: 100px;
    height: 100px;
    cursor: pointer;
    circle {
      stroke: white !important;
    }
    path {
      fill: white;
    }
  }
`;
