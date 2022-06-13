import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  width: ${responsiveSize(22)};
  height: ${responsiveSize(22)};
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: #FFFFFF;
  border: 1px solid #DFE7F0;

  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    transform: scale(0.9);
    opacity: 0.7;
  }
`