import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  border: 1px solid #DFE7F0;
  border-radius: ${responsiveSize(13)};
`

export const Header = styled.div`
  padding: ${responsiveSize(30)} ${responsiveSize(25)} ${responsiveSize(25)};
`

export const Title = styled.h1`
  margin-bottom: ${responsiveSize(12)};

  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: ${responsiveSize(21)};
  letter-spacing: 0.02em;
  text-align: center;
`

export const Description = styled.p`
  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  letter-spacing: 0.02em;
  text-align: center;
`