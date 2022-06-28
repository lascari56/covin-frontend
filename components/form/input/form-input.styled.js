import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div``

export const Input = styled.input`
  width: 100%;
  padding: 0px ${responsiveSize(15)};
  height: ${responsiveSize(36)};

  background: #FAFBFC;
  border: 1px solid #DFE7F0;
  border-radius: ${responsiveSize(5)};

  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  font-family: Roboto;

  &::placeholder {
    color: #BEBEBE;

    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
  }

  ${props => props.size === "big" && `
    height: ${responsiveSize(44)};
  `}

  ${props => props.theme === "white" && `
    background: #fff;
  `}
`

export const Label = styled.p`
  margin-bottom: ${responsiveSize(6)};

  font-weight: 300;
  font-size: ${responsiveSize(12)};
  line-height: ${responsiveSize(14)};
  letter-spacing: 0.02em;
  color: #959090;

  ${props => props.type === "auth" && `
    margin-bottom: ${responsiveSize(10)};

    color: #7C8DB5;
  `}
`