import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  border-top: 1px solid #DFE7F0;
  background-color: #FAFBFC;
`

export const Inner = styled.input`
  flex: 1;
  height: ${responsiveSize(52)};
  padding-left: ${responsiveSize(52)};

  background-color: transparent;
`