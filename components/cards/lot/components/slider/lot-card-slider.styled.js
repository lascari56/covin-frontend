import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: 0px ${responsiveSize(20)};
`

export const Action = styled.div`
  height: 100%;
  width: ${responsiveSize(20)};
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  ${props => props.type === "left" &&  `left: -${responsiveSize(20)};`}
  ${props => props.type === "right" &&  `right: -${responsiveSize(20)};`}
`

export const Arrow = styled.img`
  width: ${responsiveSize(12)};
  height: ${responsiveSize(12)};
`

export const Image = styled.div`
  height: ${responsiveSize(125)};

  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  border: 1px solid #DFE7F0;
  border-radius: ${responsiveSize(10)};

  &:not(:last-child) {
    margin-right: ${responsiveSize(6)};
  }
`