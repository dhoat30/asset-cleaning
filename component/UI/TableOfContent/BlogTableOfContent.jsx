"use client";
import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function BlogTableOfContent({ data }) {
  console.log(data);
  if (!data) return null;
  return (
    <Section variant="outlined">
      <Typography variant="h5" component="div" className="title">
        Table of Content
      </Typography>
      <ul className="parent-list">
        {data.map((item, index) => (
          <li key={index}>
            <a href={`#${item.id}`}>{item.text}</a>
            {item.subitems.length > 0 &&
              item.subitems.map((subitem, index) => {
                return (
                  <ul key={index} className="sub-items">
                    <li>
                      <a href={`#${subitem.id}`}>{subitem.text}</a>
                    </li>
                  </ul>
                );
              })}
          </li>
        ))}
      </ul>
    </Section>
  );
}
const Section = styled(Paper)`
  @media (max-width: 1100px) {
    padding: 16px;
    width: 100%;
  }
  @media (min-width: 1100px) {
    max-height: 80vh;
    overflow: auto;
    position: sticky;
    padding: 24px;
    top: 40px;
  }
  .title {
    font-weight: 700;
  }
  ul {
    padding: 0 !important;
  }
  .parent-list {
    margin-top: 8px;

    & > li {
      a {
        padding: 8px 0;
        display: block;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5rem;
        color: var(--light-on-surface-variant);
        &:hover {
          color: var(--light-primary);
        }
      }
    }
    .sub-items {
      margin-left: 16px;
      a {
        font-weight: 350;
      }
    }
  }
`;
