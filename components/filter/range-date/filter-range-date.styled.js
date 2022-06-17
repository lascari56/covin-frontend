import styled from "styled-components";

import {FormSelect} from "@components/form"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  padding: ${responsiveSize(16)} ${responsiveSize(20)};
`

export const Hr = styled.div`
  display: flex;
  align-items: center;
  height: ${responsiveSize(36)};
`

export const HrLine = styled.div`
  width: ${responsiveSize(8)};
  height: ${responsiveSize(1)};
  margin: 0px ${responsiveSize(8)};

  background: #959090;
  border-radius: ${responsiveSize(5)};
`

export const Select = styled(FormSelect)`
  flex: 1;
`