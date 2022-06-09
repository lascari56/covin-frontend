import styled from "styled-components";

import {Button} from "@components"

import { responsiveSize } from "@utils/responsive";

export const Footer = styled.div`
  margin-top: ${responsiveSize(30)};
`

export const Action = styled(Button)`
  &:not(:last-child) {
    margin-bottom: ${responsiveSize(8)};
  }
`