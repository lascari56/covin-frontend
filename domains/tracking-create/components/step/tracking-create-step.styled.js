import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  border-top: 1px solid #DFE7F0;
`

export const Header = styled.div`
  padding: ${responsiveSize(20)};
  display: flex;
  align-items: center;
`

export const Title = styled.h3`
  margin-left: ${responsiveSize(10)};

  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(17)};
  letter-spacing: 0.02em;
  color: #7C8DB5;

  ${props => props.active && `color: #3B8925;`}

  ${props => props.next && `color: #216DD1;`}
`

export const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${responsiveSize(27)};
  height: ${responsiveSize(27)};

  border-radius: 50%;
  background: #F1F6FC;

  ${props => props.active && `background: #3B8925;`}

  ${props => props.next && `color: #F1F6FC;`}
`

export const NumberValue = styled.span`
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(17)};
  color: #C4C4C4;

  ${props => props.active && `color: #ffffff;`}

  ${props => props.next && `color: #216DD1;`}
`

export const Content = styled.div`
  ${props => !props.last && `border-top: 1px solid #DFE7F0;`}
`