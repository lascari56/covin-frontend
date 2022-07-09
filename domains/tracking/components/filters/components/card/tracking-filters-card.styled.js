import styled from "styled-components";

import {FiltersCreateIcon} from "@components/filters-create"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(15)};

  background: #F9FCFF;
  border: 1px solid ${props => props.active ? "#216DD1" : "#DFE7F0"};
  border-radius: ${responsiveSize(3)};

  cursor: pointer;
  transition: all 0.4s;

  :hover {
    transform: scale(0.95);
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${responsiveSize(20)};

  border-bottom: 1px solid #DFE7F0;
`

export const Title = styled.h6`
  font-size: ${responsiveSize(14)};
  line-height: 150%;
  letter-spacing: 0.02em;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${responsiveSize(15)};
`

export const Icon = styled(FiltersCreateIcon)`
  &:not(:last-child) {
    margin-right: ${responsiveSize(4)};
  }

  &:last-child {
    margin-left: auto;
  }
`