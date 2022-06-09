import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  margin-top: ${responsiveSize(14)};
  padding: ${responsiveSize(30)} ${responsiveSize(25)};

  border: 1px solid #DFE7F0;
  border-radius: ${responsiveSize(13)};
`

export const Title = styled.p`
  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: 150%;
  color: #333333;
`

export const Description = styled.p`
  margin-top: ${responsiveSize(20)};

  color: #959090;
  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: 150%;
`