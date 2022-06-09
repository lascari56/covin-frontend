import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
`

export const Input = styled.input`
  width: 100%;
  padding: 0px ${responsiveSize(15)};
  height: ${responsiveSize(44)};

  background: #FAFBFC;
  border: 0.5px solid #DFE7F0;
  border-radius: 5px;
  font-family: Roboto;

  &::placeholder {
    color: #BEBEBE;

    font-family: inherit;
  }
`