import React, { useState, useEffect, Suspense } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import styled from "@emotion/styled";
export default function VideoModal({ data, videoID }) {
  const [isClient, setIsClient] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false); // New state for tracking video load

  useEffect(() => {
    setIsClient(true);
  }, []);
  // Function to call when video is ready
  const handleVideoReady = () => {
    setVideoLoaded(true);
  };

  return (
    <Container
      className="video-wrapper"
      style={{
        position: "relative",
        paddingTop: "56.25%",
        width: "100%",
      }}
    >
      {!videoLoaded && (
        <div className="img-wrapper">
          <Image
            src="/video-placeholder.jpg" // Replace with your placeholder image path
            fill
            alt="Video loading..."
          />
        </div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        {isClient && (
          <ReactPlayer
            url={`http://www.youtube.com/watch/${videoID}`}
            loop={true}
            muted={true}
            playing={true}
            controls={true}
            onReady={handleVideoReady}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              display: videoLoaded ? "block" : "none",
            }}
            width="100%"
            height="100%"
          />
        )}
      </Suspense>
    </Container>
  );
}
const Container = styled.div`
.img-wrapper{ 
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
}
`;
