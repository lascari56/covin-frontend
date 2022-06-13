import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`

export const Inner = styled.select`
  height: ${responsiveSize(42)};
  padding: 0px ${responsiveSize(32)} 0px ${responsiveSize(10)};

  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};

  border: 1px solid #DFE7F0;
  border-radius: ${responsiveSize(4)};
  background-color: transparent;

  outline: none;
  appearance: none;
`

export const Arrow = styled.img`
  position: absolute;
  right: ${responsiveSize(12)};

  z-index: -1;
`

export const Label = styled.span`
  margin-right: ${responsiveSize(8)};

  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  letter-spacing: 0.02em;
  color: #7C8DB5;
`