import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  ${props => props.displayType === "left" && `
    display: flex;
    align-items: center;
  `}
`

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const Inner = styled.select`
  flex: 1;
  height: ${responsiveSize(32)};
  padding: 0px ${responsiveSize(27)} 0px ${responsiveSize(10)};

  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  font-weight: 300;

  border: 1px solid #DFE7F0;
  border-radius: ${responsiveSize(4)};
  background-color: transparent;

  outline: none;
  appearance: none;

  ${props => props.size === "large" && `
    height: ${responsiveSize(36)};

    font-weight: 400;
  `}

  ${props => props.size === "big" && `
    height: ${responsiveSize(42)};
    padding: 0px ${responsiveSize(32)} 0px ${responsiveSize(10)};

    font-weight: 400;
  `}
`

export const Arrow = styled.img`
  position: absolute;
  right: ${responsiveSize(12)};

  z-index: -1;
`

export const Label = styled.span`
  margin-bottom: ${responsiveSize(6)};

  font-size: ${responsiveSize(12)};
  line-height: ${responsiveSize(14)};
  font-weight: 300;
  letter-spacing: 0.02em;
  color: #959090;

  ${props => props.size === "big" && `
    font-size: ${responsiveSize(14)};
    line-height: ${responsiveSize(16)};
    font-weight: 400;
  `}

  ${props => props.displayType === "left" && `
    margin-bottom: 0px;
    margin-right: ${responsiveSize(8)};

    color: #7C8DB5;
  `}
`