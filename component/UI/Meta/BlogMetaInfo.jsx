"use client";
import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Typography from "@mui/material/Typography";
export default function BlogMetaInfo({
  authorFirstName,
  authorLastName,
  publishDate,
  className,
}) {
  return (
    <Wrapper className={`${className}`}>
      <div className="profile-pic-wrapper">
        <Image
          src="https://data.assetcleaning.co.nz/wp-content/uploads/2024/07/13347.jpg"
          alt="Maria"
          fill
        />
      </div>
      <div className="text-wrapper">
        <Typography
          variant="subtitle1"
          component="span"
          className="meta-author-name"
          color="var(--light-on-surface-variant)"
        >
          {authorFirstName} {authorLastName}
        </Typography>
        <Typography
          variant="subtitle1"
          component="span"
          className="divider"
          color="var(--light-on-surface-variant)"
        >
          |
        </Typography>
        <Typography
          variant="subtitle1"
          component="span"
          color="var(--light-on-surface-variant)"
          className="meta-info"
        >
          {publishDate}
        </Typography>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: 16px;

  border-bottom: 1px solid var(--light-outline-variant);
  .profile-pic-wrapper {
    position: relative;
    width: 32px;
    height: 32px;
    img {
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .text-wrapper {
    display: flex;
    align-items: center;
    gap: 4px;
    position: relative;
    flex-wrap: wrap;

    .meta-author-name {
    }
    .divider {
      @media (max-width: 370px) {
        display: none;
      }
    }
  }
`;
