import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.48.5a.5.5 0 0 0-1 0v5.98H.5a.5.5 0 0 0 0 1h5.98v5.98a.5.5 0 0 0 1 0V7.48h5.98a.5.5 0 0 0 0-1H7.48V.5Z"
      fill="#216DD1"
    />
  </svg>
)

export default SvgComponent
