import styled from "styled-components";

import {Button} from "@components"
import {FormInput} from "@components/form"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  margin-top: ${responsiveSize(20)};

  display: flex;
`

export const Input = styled(FormInput)`
  flex: 1;
`

export const Action = styled(Button)`
  width: 137px;
  margin-left: 6px;
`