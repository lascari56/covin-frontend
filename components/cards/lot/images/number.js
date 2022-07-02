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
      d="M7.29 14 9.573 2h1.16l-2.29 12H7.29Zm3.283 0 2.29-12h1.153l-2.29 12h-1.153ZM15 6.574H6.613V5.43H15v1.145Zm-.605 4.047H6V9.484h8.395v1.137Z"
      fill="#7C8DB5"
    />
  </svg>
)

export default SvgComponent
