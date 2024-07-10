import React from "react";

export default function Skeleton({ height, className }) {
  return (
    <div
      className={`${className} skeleton`}
      style={{
        position: "relative",
        paddingBottom: `${height}`,
        width: "100%",
      }}
    ></div>
  );
}
