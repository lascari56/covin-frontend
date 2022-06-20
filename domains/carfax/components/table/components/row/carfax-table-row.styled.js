import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Item = styled.div`
  min-height: ${responsiveSize(40)};
  display: flex;
  align-items: center;
`

export const Date = styled.span`
  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: 150%;
  color: #7C8DB5;
`
