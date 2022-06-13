import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(20)};

  background: #FFFFFF;
  border: 1px solid #DFE7F0;
  border-radius: ${responsiveSize(3)};
`

export const Title = styled.h4`
  font-size: ${responsiveSize(14)};
  line-height: 150%;
  letter-spacing: 0.02em;
`