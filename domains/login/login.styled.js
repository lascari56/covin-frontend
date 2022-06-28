import styled from "styled-components";

import {Button} from "@components"

import {FormInput} from "@components/form"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`

`

export const Input = styled(FormInput)`
  :not(:last-child) {
    margin-bottom: ${responsiveSize(30)};
  }
`

export const Forgot = styled.p`
  padding: ${responsiveSize(6)} 0px ${responsiveSize(6)} ${responsiveSize(6)};
  margin: ${responsiveSize(6)} 0px ${responsiveSize(8)} auto;

  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  letter-spacing: 0.02em;

  cursor: pointer;
  transition: all 0.4s;

  :hover {
    opacity: 0.7;
  }
`

export const Action = styled(Button)`
  :not(:last-child) {
    margin-bottom: ${responsiveSize(8)};
  }
`

export const SingUp = styled.span`
  margin-top: ${responsiveSize(20)};

  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  letter-spacing: 0.02em;
  text-align: center;
`

export const SingUpLink = styled.a`
  padding: ${responsiveSize(10)} 0px;

  color: #216DD1;

  cursor: pointer;
`