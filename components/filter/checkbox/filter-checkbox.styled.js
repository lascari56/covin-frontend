import styled from "styled-components";

import {FormSearch} from "@components/form"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
`

export const Content = styled.div`
  max-height: ${responsiveSize(210)};
  padding: ${responsiveSize(6.5)} 0px;

  overflow-y: scroll;
`

export const Search = styled(FormSearch)`
  width: 100%;

  background-color: transparent;
  border-radius: 0px;
  border-bottom: 1px solid #EBEBEB;
`