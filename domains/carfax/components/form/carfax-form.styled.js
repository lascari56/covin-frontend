import styled from "styled-components";

import {FormInput} from "@components/form"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;

  .Toastify__toast-container--top-center {
    top: 50%;
  }
`

export const Input = styled(FormInput)`
  flex: 1;
  margin-right: ${responsiveSize(8)};
`

export const Logo = styled.img`
  width: ${responsiveSize(83)};
  height: ${responsiveSize(20)};
`