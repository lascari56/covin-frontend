import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  height: 100%;
  width: ${responsiveSize(75)};

  border-right: 1px solid #DFE7F0;

  ${props => props.full && `width: ${responsiveSize(232)};`}

  transition: all 0.4s;

  overflow: hidden;
`

export const Group = styled.div``

export const Line = styled.div`
  margin: ${responsiveSize(19)} 0px;

  border-top: 1px solid #DFE7F0;

  width: 100%;
`