import styled from "styled-components";

import {FormInput} from "@components/form"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
`

export const Input = styled(FormInput)`
  margin-bottom: ${responsiveSize(8)};
`