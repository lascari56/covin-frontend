import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: 0px ${responsiveSize(23)};
  height: ${responsiveSize(61)};
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    opacity: 0.6;
  }

  ${props => props.active && `background-color: #E3EAFF;`}
`

export const Title = styled.span`
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(19)};
  letter-spacing: 0.02em;

  color: #7C8DB5;

  ${props => props.active && `color: #216DD1;`}
`