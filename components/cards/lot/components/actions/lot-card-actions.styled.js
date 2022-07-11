import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-left: #DFE7F0 1px solid;
`

export const Item = styled.div`
  position: relative;
`

export const Popup = styled.div`
  position: absolute;
  right: 100%;
  min-width: ${responsiveSize(338)};

  z-index: 1;

  ${props => props.position === "bottom" && `bottom: 0px;`}
  ${props => props.position === "top" && `top: 0px;`}
`