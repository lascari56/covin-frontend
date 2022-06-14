import styled from "styled-components";

import ArrowSvg from "./images/arrow"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(20)} 0px;

  background: #FFFFFF;
  border: 1px solid #DFE7F0;
  border-radius: ${responsiveSize(3)};
`

export const Header = styled.div`
  padding: 0px ${responsiveSize(20)};
  margin-bottom: ${responsiveSize(12.5)};
`

export const Title = styled.h4`
  font-size: ${responsiveSize(14)};
  line-height: 150%;
  letter-spacing: 0.02em;
`

export const Content = styled.div`
  padding: 0px ${responsiveSize(5)} ${responsiveSize(8.5)};
`

export const Group = styled.div`
  margin: ${responsiveSize(4)} 0px;
`

export const Footer = styled.div`
  margin: 0px ${responsiveSize(20)};
  padding: ${responsiveSize(15)} 0px 0px;
  display: flex;
  justify-content: flex-end;

  border-top: 1px solid #DFE7F0;
`