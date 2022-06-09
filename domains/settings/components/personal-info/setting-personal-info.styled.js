import styled from "styled-components";

import {Button} from "@components"
import {FormGroup, FormInput} from "@components/form"

import { responsiveSize } from "@utils/responsive";

export const Content = styled.div`
  flex: 1;
`

export const Group = styled(FormGroup)`
  &:not(:last-child) {
    margin-bottom: ${responsiveSize(30)}
  }
`

export const Input = styled(FormInput)`
  &:not(:last-child) {
    margin-bottom: ${responsiveSize(8)}
  }
`

export const Action = styled(Button)`
  margin-top: ${responsiveSize(20)};
  margin-left: auto;
  width: ${responsiveSize(139)};
`