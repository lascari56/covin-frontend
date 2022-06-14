import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
`

export const Title = styled.h6`
  margin-bottom: ${responsiveSize(20)};

  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: 150%;
  color: #333333;
`

export const Description = styled.p`
  margin-bottom: ${responsiveSize(20)};

  font-style: normal;
  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: 150%;
  color: #7C8DB5;
`