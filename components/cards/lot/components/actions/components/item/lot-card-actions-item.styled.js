import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${responsiveSize(60)};
  height: ${responsiveSize(60)};

  cursor: pointer;
  user-select: none;
  transition: opacity 0.4s;
  
  &:hover {
    /* transform: rotate(360deg); */
    
    opacity: 0.5;
  }
`

export const Icon = styled.img``
