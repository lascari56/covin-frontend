import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-left: #DFE7F0 1px solid;
`

export const Icon = styled.img``

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${responsiveSize(60)};
  height: ${responsiveSize(60)};

  cursor: pointer;
  
  &:hover {
    transform: rotate(360deg);
    transition: all 0.4s;
  }
`