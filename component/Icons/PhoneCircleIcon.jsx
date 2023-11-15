import React from "react";

export default function PhoneCircleIcon({ className }) {
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
      <g clip-path="url(#clip0_73_174)">
        <path
          d="M7.965 11.0925C9.045 13.215 10.785 14.9475 12.9075 16.035L14.5575 14.385C14.76 14.1825 15.06 14.115 15.3225 14.205C16.1625 14.4825 17.07 14.6325 18 14.6325C18.4125 14.6325 18.75 14.97 18.75 15.3825V18C18.75 18.4125 18.4125 18.75 18 18.75C10.9575 18.75 5.25 13.0425 5.25 6C5.25 5.5875 5.5875 5.25 6 5.25H8.625C9.0375 5.25 9.375 5.5875 9.375 6C9.375 6.9375 9.525 7.8375 9.8025 8.6775C9.885 8.94 9.825 9.2325 9.615 9.4425L7.965 11.0925Z"
          fill="#1B3700"
        />
      </g>
      <defs>
        <clipPath id="clip0_73_174">
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
