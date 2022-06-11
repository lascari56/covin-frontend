import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${responsiveSize(16)};
  height: ${responsiveSize(16)};

  border: 1px solid #EBECEE;
  border-radius: 2px;
  transition: all 0.3s;

  ${props => props.active && `
    background: #216DD1;
    border-color: #216DD1;
  `}
`

export const Icon = styled.img`
  width: ${responsiveSize(10)};
  height: ${responsiveSize(8)};
  opacity: 0;

  transition: all 0.3s;

  ${props => props.active && `opacity: 1;s`}
`