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
    <path
      d="M3.744 10.705 6.258 3.47h1.224L4.324 12h-.873l.293-1.295ZM1.394 3.47l2.49 7.236L4.196 12h-.873L.17 3.469h1.225Zm8.69 0V12H8.953V3.469h1.13Zm8.859 0V12h-1.137l-4.295-6.58V12h-1.13V3.469h1.13l4.313 6.597V3.47h1.119Z"
      fill="#7C8DB5"
    />
  </svg>
)

export default SvgComponent
