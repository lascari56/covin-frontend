import styled from "styled-components";

import {Button} from "@components"
import { FormSearch } from 'components/form';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
`

export const Footer = styled.div`
  display: flex;
  padding: ${responsiveSize(16)};
`

export const Action = styled(Button)`
  flex: 1;
  padding: 0px ${responsiveSize(4)};

  &:not(:last-child) {
    margin-right: ${responsiveSize(5)};
  }
`

export const Search = styled(FormSearch)`
  width: 100%;

  border-radius: 0px;
  border-bottom: 1px solid #EBEBEB;
`