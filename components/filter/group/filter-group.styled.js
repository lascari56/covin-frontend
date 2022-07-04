import styled from "styled-components";

import FilterGroupActions from "./components/actions"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  user-select: none;
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const Header = styled.div`
  width: 100%;
  height: ${responsiveSize(44)};
  padding: 0px ${responsiveSize(16)};
  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  border-bottom: 1px solid #EBEBEB;
  background: ${props => props.show ? "#F1F6FC" : "transparents"};

  transition: all 0.4s;
  
  ${props => !props.disabled && `
    cursor: pointer;
  `}
`

export const Title = styled.h6`
  flex: 1;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};

  ${props => props.disabled && `
    opacity: 0.4;
  `}
`

export const Arrow = styled.img`
  user-select: none;
  transition: all 0.4s;

  ${props => props.active && `transform: rotate(180deg)`}
`

export const Content = styled.div`
  border-bottom: 1px solid #EBEBEB;
`

export const Actions = styled(FilterGroupActions)`
  position: absolute;
  
  right: ${responsiveSize(31)};
  margin-right: ${responsiveSize(12)};

  z-index: 1;
`