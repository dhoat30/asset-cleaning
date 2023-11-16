import React from "react";

export default function EmailCircleIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="12" fill="#94D955" />
      <g clipPath="url(#clip0_73_182)">
        <path
          d="M18 6H6C5.175 6 4.5075 6.675 4.5075 7.5L4.5 16.5C4.5 17.325 5.175 18 6 18H18C18.825 18 19.5 17.325 19.5 16.5V7.5C19.5 6.675 18.825 6 18 6ZM18 9L12 12.75L6 9V7.5L12 11.25L18 7.5V9Z"
          fill="#1B3700"
        />
      </g>
      <defs>
        <clipPath id="clip0_73_182">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(3 3)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
