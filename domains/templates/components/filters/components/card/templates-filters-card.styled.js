import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${responsiveSize(15)};

  background: #F9FCFF;
  border: 1px solid #DFE7F0;
  border-radius: ${responsiveSize(3)};

  cursor: pointer;
  transition: all 0.4s;

  :hover {
    transform: scale(0.95);
    opacity: 0.7;
  }
`

export const Title = styled.h6`
  font-size: ${responsiveSize(14)};
  line-height: 150%;
  letter-spacing: 0.02em;
`