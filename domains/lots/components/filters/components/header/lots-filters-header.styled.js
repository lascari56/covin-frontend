import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${responsiveSize(17)} ${responsiveSize(5)} ${responsiveSize(10)} ${responsiveSize(15)};

  border-bottom: 1px solid #DFE7F0;
`

export const Title = styled.h5`
  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: ${responsiveSize(21)};
  letter-spacing: 0.02em;
  color: #292929;
`

export const Reset = styled.span`
  padding: ${responsiveSize(10)} ${responsiveSize(10)};
  font-size: ${responsiveSize(12)};
  line-height: ${responsiveSize(14)};
  letter-spacing: 0.02em;
  color: #959090;

  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    opacity: 0.6;
  }
`