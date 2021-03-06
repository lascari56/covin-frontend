import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.351 4.04a.59.59 0 0 0-.312.296C5.012 4.402 5 6.72 5 12.001c0 6.318.008 7.588.05 7.679.105.226.388.356.673.307.1-.017.79-.498 2.946-2.055 1.548-1.118 2.835-2.026 2.859-2.018.024.008 1.293.917 2.82 2.02s2.82 2.02 2.875 2.04c.25.087.6-.05.722-.284.056-.107.06-.718.051-7.737l-.009-7.622-.076-.092a1.012 1.012 0 0 0-.178-.161c-.102-.069-.105-.069-6.187-.076-5.014-.006-6.104 0-6.195.037Zm11.472 7.66c0 5.302-.01 6.633-.046 6.613a391.6 391.6 0 0 1-2.529-1.818c-2.6-1.878-2.58-1.865-2.87-1.816-.093.016-.789.5-2.642 1.838-1.384 1-2.525 1.817-2.535 1.817-.01 0-.019-2.986-.019-6.637V5.06h10.641v6.64Z"
      fill="#216DD1"
    />
    <path d="M6 5v13.5l5.5-3.5 5.5 3.5V5H6Z" fill="#216DD1" />
  </svg>
)

export default SvgComponent
