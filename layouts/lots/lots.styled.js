import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  flex: 1;
  display: flex;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Children = styled.div`
  flex: 1;
  padding: ${responsiveSize(25)} ${responsiveSize(22)};
`

export const Left = styled.div`
  min-height: 100%;
  width: ${responsiveSize(275)};

  border-right: 1px solid #DFE7F0;
`