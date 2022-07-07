import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: ${responsiveSize(32)};
`

export const Title = styled.h5`
  margin-bottom: ${responsiveSize(12)};

  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: ${responsiveSize(21)};
  color: #216DD1;

  opacity: 0.7;
`

export const Description = styled.p`
  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};

  opacity: 0.7;
`