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
    <path
      d="M7 10 3 5.5 7 1"
      stroke="#7C8DB5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
