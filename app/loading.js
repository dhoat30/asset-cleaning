'use client';
import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Container>
      <div className="splash-container">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <Image
          src="/logo-dark.svg"
          width="192"
          height="42"
          quality={70}
          alt="Asset Cleaning Logo"
          style={{ objectFit: "cover" }}
        />
      </div>
    </Container>
  );
}
const Container = styled.section`
  .splash-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 110;
    background:#0D2000; 
  }

  .circle {
    position: absolute;
    border: 8px solid var(--light-outline);
    border-radius: 50%;
    animation: expand 3s infinite ease-in-out;
  }

  .circle1 {
    width: 200px;
    height: 200px;
    animation-delay: 0s;
  }

  .circle2 {
    width: 300px;
    height: 300px;
    animation-delay: 1s;
  }

  .circle3 {
    width: 400px;
    height: 400px;
    animation-delay: 2s;
  }

  .logo {
    position: relative;
    z-index: 1;
  }

  @keyframes expand {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;
