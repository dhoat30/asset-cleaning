import React from "react";

export default function LocationCircleIcon({ className }) {
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
      <g clip-path="url(#clip0_73_189)">
        <path
          d="M12 4.5C9.0975 4.5 6.75 6.8475 6.75 9.75C6.75 13.6875 12 19.5 12 19.5C12 19.5 17.25 13.6875 17.25 9.75C17.25 6.8475 14.9025 4.5 12 4.5ZM12 11.625C10.965 11.625 10.125 10.785 10.125 9.75C10.125 8.715 10.965 7.875 12 7.875C13.035 7.875 13.875 8.715 13.875 9.75C13.875 10.785 13.035 11.625 12 11.625Z"
          fill="#1B3700"
        />
      </g>
      <defs>
        <clipPath id="clip0_73_189">
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
