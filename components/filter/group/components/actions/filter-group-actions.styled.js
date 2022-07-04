import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Item = styled.div`
  padding: ${responsiveSize(8)};

  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    transform: scale(0.9);
  }
`

export const Label = styled.span`
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  letter-spacing: 0.02em;
  color: #7C8DB5;
`

export const Hr = styled.div`
  width: ${responsiveSize(1)};
  height: ${responsiveSize(13)};

  background: #7C8DB5;
  border-radius: 5px;
`