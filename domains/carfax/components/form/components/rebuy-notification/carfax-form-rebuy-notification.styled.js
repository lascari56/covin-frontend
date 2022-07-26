import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

import {Button as ButtonCustom} from "@components"

export const Container = styled.div`
  padding: 12px;
  /* display: flex;
  align-items: center; */
`

export const Message = styled.p`
  margin-bottom: 24px;

  font-weight: 500;
  text-align: center;
`

export const Action = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled(ButtonCustom)`
  margin-right: 14px;
`
