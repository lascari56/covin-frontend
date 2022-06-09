import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: ${responsiveSize(16)};
`

export const Left = styled.div`
  width: ${responsiveSize(29)};
  min-width: ${responsiveSize(16)};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Icon = styled.img``

export const Title = styled.span`
  margin-left: ${responsiveSize(8)};

  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  letter-spacing: 0.02em;

  color: #292929;
`