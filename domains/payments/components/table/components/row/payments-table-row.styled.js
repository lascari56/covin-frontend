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

export const Balance = styled.span`
  color: #216DD1;
`

export const Amount = styled.span`
  color: #7C8DB5;
`

export const Status = styled.span`
  color: #FFAF36;
`

export const Info = styled.span`
  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: 150%;
`

export const InfoDate = styled.span`
  font-size: ${responsiveSize(14)};
  line-height: 150%;
  color: #7C8DB5;
`