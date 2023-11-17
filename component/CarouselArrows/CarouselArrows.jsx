import React from "react";
import styled from "@emotion/styled";

import LongArrowIcon from "../Icons/LongArrowIcon";
export default function CarouselArrows({ next, previous, className }) {
  return (
    <Container className={`${className} `}>
      <div className="wrapper">
        <div className="arrow-wrapper" onClick={previous}>
          <LongArrowIcon />
        </div>
        <div className="arrow-wrapper" onClick={next}>
          <LongArrowIcon className="right-arrow" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  .wrapper {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin: 0 0 32px 0;
  }
  .arrow-wrapper {
    cursor: pointer;
    &:hover {
      svg {
        path {
          fill: var(--material-theme-sys-light-on-surface, #1d1b16);
        }
      }
    }
  }
  .right-arrow {
    transform: rotate(180deg);
  }
`;
