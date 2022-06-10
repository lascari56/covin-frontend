import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: ${responsiveSize(36)};

  border-radius: ${responsiveSize(5)};
  background: #FAFBFC;

  ${props => props.size === "big" && `height: ${responsiveSize(44)};`}
`

export const Inner = styled.input`
  position: relative;
  flex: 1;
  height: 100%;
  padding: 0px 0px 0px ${responsiveSize(43)};

  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};

  background-color: transparent;
  border-radius: inherit;

  &::placeholder {
    color: #959090;
  }

  z-index: 1;

  ${props => !props.isIcon && `padding-left: ${responsiveSize(16)};`}
`

export const Icon = styled.img`
  position: absolute;
  left: ${responsiveSize(15)};
  width: ${responsiveSize(18)};
  height: ${responsiveSize(18)};
`