import styled from "styled-components";

import {FormInput} from "@components/form"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled(FormInput)`
  flex: 1;
  margin-right: ${responsiveSize(8)};
`