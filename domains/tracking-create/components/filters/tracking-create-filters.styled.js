import styled from "styled-components";

import {Button} from "@components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${responsiveSize(15)} ${responsiveSize(15)} ${responsiveSize(25)};
`

export const Action = styled(Button)`
  min-width: ${responsiveSize(120)};

  &:not(:last-child) {
    margin-right: ${responsiveSize(5)};
  }
`