import styled from "styled-components";

import {Button} from "@components"

import {FormInput, FormPhone} from "@components/form"

import Link from 'next/link'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  margin-bottom: ${responsiveSize(20)};
`

export const Phone = styled(FormPhone)`
  margin-bottom: ${responsiveSize(15)};
`

export const Input = styled(FormInput)`
  :not(:last-child) {
    margin-bottom: ${responsiveSize(15)};
  }
`

export const Action = styled(Button)`
  :not(:last-child) {
    margin-bottom: ${responsiveSize(8)};
  }
`

export const Login = styled.p`
  padding: ${responsiveSize(10)} 0px;
  margin-top: ${responsiveSize(10)};

  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  text-align: center;
  letter-spacing: 0.02em;
  color: #216DD1;

  cursor: pointer;
`