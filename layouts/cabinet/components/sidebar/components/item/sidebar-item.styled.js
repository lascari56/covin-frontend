import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: ${responsiveSize(48)};
  padding: 0px ${responsiveSize(25)};

  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    opacity: 0.6;
  }

  ${props => props.active && `background: #F1F6FC;`}
`

export const Icon = styled.img``

export const Title = styled.span`
  margin-left: ${responsiveSize(12)};

  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  letter-spacing: 0.02em;

  ${props => props.theme === 'gray' && 'color: #292929;'}

  ${props => props.theme === 'blue' && 'color: #216DD1;'}
`


export const Indicator = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  width: 2px;

  background: #216DD1;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;

  transition: all 0.4s;
  opacity: 1;

  ${props => !props.active && `opacity: 0;`}
`