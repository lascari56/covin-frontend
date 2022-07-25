import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Item = styled.div`
  min-height: ${responsiveSize(40)};
  display: flex;
  align-items: center;
`

export const Date = styled.span`
  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: 150%;
  color: #7C8DB5;
`

export const Status = styled.span`
  ${props => (props.status === "error") && `
    color: #FF0E0E;
    font-weight: 600;
  `}

  ${props => (props.status === "Success" || props.status === "SUCCESS") && `color: #2DC946;`}
  ${props => (props.status === "pending") && `color: #FFAF36;`}
`
