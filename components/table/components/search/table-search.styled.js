import styled from "styled-components";

import Icon from "@components/icon"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  border-top: 1px solid #DFE7F0;
  background-color: #FAFBFC;
`

export const Inner = styled.input`
  flex: 1;
  height: ${responsiveSize(52)};
  padding-left: ${responsiveSize(52)};

  background-color: transparent;
`

export const SearchIcon = styled(Icon)`
  position: absolute;
  width: ${responsiveSize(16)};
  height: ${responsiveSize(16)};
  left: ${responsiveSize(28)};
`

export const Action = styled.div`
  cursor: pointer;
  height: ${responsiveSize(52)};
  padding: 0px ${responsiveSize(16)};
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.4s;

  :hover {
    transform: scale(0.8);
  }
`