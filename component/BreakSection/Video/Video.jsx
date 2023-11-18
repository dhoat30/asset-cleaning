"use client";
import React, { useState, useEffect, Suspense } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import styled from "@emotion/styled";
import PlayIcon from "@/component/Icons/PlayIcon";
export default function Video({
  data,
  videoFile,
  placeholderImage,
  className,
}) {
  const [isClient, setIsClient] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false); // New state for tracking video load
  console.log(videoLoaded);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to load and play the video
  const handleImageClick = () => {
    setVideoLoaded(true);
  };
  return (
    <Container
      className={className}
      style={{
        position: "relative",
        paddingTop: "56.25%",
        width: "100%",
      }}
    >
      {!videoLoaded && (
        <div className="img-wrapper">
          <Image
            onClick={handleImageClick}
            src={placeholderImage} // Replace with your placeholder image path
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
          url={videoFile.url}
          controls={true}
          playing={true}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          width="100%"
          height="100%"
        />
      )}
    </Container>
  );
}
const Container = styled.div`
  .img-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
