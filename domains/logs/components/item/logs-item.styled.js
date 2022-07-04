import styled from "styled-components";

import {Button} from "@components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.tr`
  border-bottom: 1px solid #DFE7F0;
`

export const Item = styled.div`
  min-height: ${responsiveSize(72)};
  display: flex;
  align-items: center;
`

export const Date = styled.span`
  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: 150%;
  color: #7C8DB5;
`

export const Balance = styled.span`
  color: #216DD1;
`

export const Amount = styled.span`
  color: #7C8DB5;
`

export const Status = styled.span`
  ${props => props.status === "Error" && `
    color: #FF0E0E;
    font-weight: 600;
  `}

  ${props => props.status === "Success" && `color: #2DC946;`}
  ${props => props.status === "Warning" && `color: #FFAF36;`}
`

export const Message = styled.span`
  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: 150%;
`

export const Action = styled(Button)`
  width: 100px;
`