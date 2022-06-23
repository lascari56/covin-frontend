import styled from "styled-components";

import {FormInput} from "@components/form"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Inner = styled(FormInput)`
  width: ${responsiveSize(70)};
`

export const Meta = styled.span`
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  letter-spacing: 0.02em;
  color: #7C8DB5;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${responsiveSize(36)};
  width: ${responsiveSize(36)};

  cursor: pointer;
  transition: all 0.4s;

  :hover {
    transform: scale(0.8);
  }

  ${props => props.disabled && `opacity: 0.7;`}
`