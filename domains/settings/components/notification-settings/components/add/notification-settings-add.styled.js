import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${responsiveSize(20)};

  border-bottom: 1px solid  #DFE7F0;
`

export const Title =  styled.span`
  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: 150%;
  color: #333333;
`

export const Description = styled.span`
  margin-top: ${responsiveSize(20)};
  margin-bottom: ${responsiveSize(20)};

  font-style: normal;
  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: 150%;
  color: #7C8DB5;
`