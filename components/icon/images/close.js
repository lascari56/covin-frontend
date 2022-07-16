import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={11.5} stroke="#000" />
    <path
      d="M8.72 8.124a.422.422 0 0 0-.596.596l3.28 3.28-3.28 3.28a.422.422 0 0 0 .596.597l3.28-3.28 3.28 3.28a.422.422 0 1 0 .597-.597L12.597 12l3.28-3.28a.422.422 0 1 0-.597-.596L12 11.404l-3.28-3.28Z"
      fill="#000"
    />
  </svg>
)

export default SvgComponent
