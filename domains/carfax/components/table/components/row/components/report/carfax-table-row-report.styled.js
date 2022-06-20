import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Hr = styled.div`
  width: ${responsiveSize(1)};
  height: ${responsiveSize(9)};
  margin: 0px ${responsiveSize(6)};

  background: #7C8DB5;
  border-radius: ${responsiveSize(5)};
`
