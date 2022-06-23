import styled from "styled-components";

import {FormInput} from "@components/form"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Inner = styled(FormInput)`
  width: ${responsiveSize(70)};
`

export const Meta = styled.span`
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  letter-spacing: 0.02em;
  color: #7C8DB5;
`

// export const Content = styled.