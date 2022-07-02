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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.588 4.025c-.984.109-1.772.813-2.02 1.805-.065.263-.068.443-.068 4.438 0 4.026.002 4.174.07 4.445.112.447.29.758.637 1.112.228.233.37.343.57.443.29.146.641.245.877.245l.15.001v1.743c0 1.218.012 1.743.039 1.743.02 0 1.077-.741 2.348-1.647s2.373-1.69 2.449-1.743l.138-.096h7.746l.28-.083c.792-.235 1.403-.87 1.63-1.696.062-.223.066-.472.066-4.467 0-3.994-.004-4.243-.065-4.466-.182-.66-.638-1.24-1.195-1.52-.603-.301.052-.275-7.054-.281-3.48-.004-6.45.007-6.598.024Zm13.033 1.09c.37.142.647.426.803.822l.083.21v8.243l-.083.21c-.156.396-.433.68-.803.822-.196.075-.231.075-4.184.075H10.45l-1.8 1.283-1.8 1.284-.017-1.274-.018-1.274-.656-.02c-.428-.013-.699-.038-.78-.07a1.403 1.403 0 0 1-.758-.728l-.11-.236V6.074l.094-.207c.13-.282.26-.444.483-.596.35-.24-.132-.224 6.91-.228l6.425-.003.198.075ZM8.038 8.126v.508h7.906V7.618H8.038v.508Zm0 2.179v.508h7.906V9.796H8.038v.509Zm0 2.178v.509h7.906v-1.017H8.038v.508Z"
      fill="#216DD1"
    />
  </svg>
)

export default SvgComponent
