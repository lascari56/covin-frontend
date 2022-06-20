import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  border-radius: ${responsiveSize(12)};

  border: 1px solid #DFE7F0;

  overflow: hidden;
`

// export const Thead = styled.thead`
  // background: #F1F6FC;
  // border-radius: 12px 12px 0px 0px;
// `