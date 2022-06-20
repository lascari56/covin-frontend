import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    {...props}
  >
    <circle
      cx={7.844}
      cy={7.844}
      stroke="#959090"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      r={5.992}
    />
    <path
      d="m12.012 12.324 2.35 2.344"
      stroke="#959090"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
