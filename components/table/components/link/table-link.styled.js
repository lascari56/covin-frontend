import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.span`
  font-size: ${responsiveSize(14)};
  line-height: 150%;
  color: #216DD1;

  cursor: pointer;
  transition: all 0.4s;

  :hover {
    opacity: 0.6;
  }
`