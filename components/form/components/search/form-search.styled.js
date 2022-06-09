import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  position: relative;
`

export const Inner = styled.input`
  height: ${responsiveSize(36)};
  padding: 0px 0px 0px ${responsiveSize(36)};

  background: #FAFBFC;
  border-radius: ${responsiveSize(5)};

  &::placeholder {
    color: #959090;
  }
`