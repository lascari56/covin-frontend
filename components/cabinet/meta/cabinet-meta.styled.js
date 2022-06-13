import styled from "styled-components";

import {FormSearch, FormSelect} from "@components/form"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const Search = styled(FormSearch)`
  flex: 1;
`

export const Select = styled(FormSelect)`
  margin-left: ${responsiveSize(20)};
`