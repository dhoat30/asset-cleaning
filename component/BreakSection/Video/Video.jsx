import React, { useState, useEffect, Suspense } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import styled from "@emotion/styled";

export default function Video({
  videoFile,
  placeholderImage,
  className,
  imagePriority,
}) {
  const [videoLoaded, setVideoLoaded] = useState(false); // State for tracking video load

  useEffect(() => {
    // Set a timeout to delay video loading
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 6000);

    // Clear the timer if the component is unmounted before the timer finishes
    return () => clearTimeout(timer);
  }, []);

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
            src={placeholderImage.url} // Placeholder image path
            layout="fill"
            alt="Video loading..."
            priority={imagePriority}
          />
        </div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        {videoLoaded && (
          <ReactPlayer
            url={videoFile.url}
            loop={true}
            muted={false}
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
      </Suspense>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  paddingtop: "56.25%";
  width: "100%";

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
