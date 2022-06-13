import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: center;

  z-index: 1;

  ${props => props.isBackground && `background-color: rgba(255, 255, 255, 0.5);`}
`

export const Loader = styled.div`
  position: fixed;
  top: 50%;

  transform: translate(-50%);
`