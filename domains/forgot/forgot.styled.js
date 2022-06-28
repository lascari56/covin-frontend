import styled from "styled-components";

import {Button, Icon} from "@components"

import {FormInput} from "@components/form"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled(FormInput)`
  margin-bottom: ${responsiveSize(15)};
`

export const Action = styled(Button)`
  :not(:last-child) {
    margin-bottom: ${responsiveSize(8)};
  }
`

export const Back = styled(Icon)`
  position: absolute;
  top: ${responsiveSize(20)};
  left: ${responsiveSize(20)};

  cursor: pointer;
  z-index: 1;
`