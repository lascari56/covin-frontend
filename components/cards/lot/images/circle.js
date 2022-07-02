import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 21 16"
    {...props}
  >
    <circle cx={10.5} cy={8} r={7.75} stroke="#7C8DB5" strokeWidth={0.5} />
  </svg>
)

export default SvgComponent
