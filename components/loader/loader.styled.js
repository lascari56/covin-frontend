import styled from "styled-components";

import { Rings } from  'react-loader-spinner'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-content: center;

  z-index: 1;

  /* background-color: rgba(0, 0, 0, 0.1); */
`

export const Loader = styled(Rings)`
  position: static;
`