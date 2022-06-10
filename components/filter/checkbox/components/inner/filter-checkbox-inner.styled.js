import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  width: ${responsiveSize(16)};
  height: ${responsiveSize(16)};

  border: 1px solid #EBECEE;
  border-radius: 2px;

  ${props => props.active && `
    background: #216DD1;
    border-color: #216DD1;
  `}
`