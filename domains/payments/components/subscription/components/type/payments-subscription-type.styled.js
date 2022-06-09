import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding-bottom: ${responsiveSize(30)};
  display: flex;
  align-items: center;

  border-bottom: 1px solid #DFE7F0;
`

export const Title = styled.p`
  font-size: ${responsiveSize(16)};
  line-height: 150%;
  color: #7C8DB5;
`

export const Type = styled.p`
  margin-left: ${responsiveSize(165)};

  font-weight: 500;
  font-size: ${responsiveSize(14)};
  line-height: 150%;
  color: #333333;
`