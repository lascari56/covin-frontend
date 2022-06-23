import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 11 11"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="m4 1 4 4.5L4 10"
        stroke="#7C8DB5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="rotate(-180 5.5 5.5)" d="M0 0h11v11H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
