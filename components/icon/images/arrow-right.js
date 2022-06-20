import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 17"
    {...props}
  >
    <path
      d="M13.99 8.306H3.364M9.704 4.039l4.286 4.267-4.286 4.267"
      stroke="#1A6CEB"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
