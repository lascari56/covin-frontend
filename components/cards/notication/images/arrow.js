import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={7}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#E5E5E5" d="M0 0h7v12H0z" />
    <path fill="#fff" d="M-86-155H33V41H-86z" />
    <path
      d="m.505 11.907-.143.145V45a4.5 4.5 0 0 1-4.5 4.5H-326a4.5 4.5 0 0 1-4.5-4.5v-256a4.5 4.5 0 0 1 4.5-4.5H-4.138a4.5 4.5 0 0 1 4.5 4.5V.21l.15.148 5.422 5.3a.5.5 0 0 1 .007.707L.505 11.907Z"
      fill="#fff"
      stroke="#DFE7F0"
    />
  </svg>
)

export default SvgComponent
