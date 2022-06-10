import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: ${responsiveSize(8.5)} ${responsiveSize(15)};

  background-color: #fff;

  transition: background-color 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #F1F6FC;
  }
`

export const Label = styled.span`
  margin-left: ${responsiveSize(7)};

  font-weight: 300;
  font-size: ${responsiveSize(13)};
  line-height: ${responsiveSize(15)};
`

export const Count = styled.span`
  margin-left: ${responsiveSize(5)};
  
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  color: #216DD1;
`