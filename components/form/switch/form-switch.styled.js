import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  width: ${responsiveSize(30)};
  height: ${responsiveSize(18)};
  padding: ${responsiveSize(3)};

  background: #216DD1;
  border-radius: ${responsiveSize(50)};
`

export const Indicator = styled.div`
  width: ${responsiveSize(12)};
  height: ${responsiveSize(12)};

  background: #FFFFFF;
  border-radius: 50%;

  transform: translateX(${responsiveSize(12)});
`