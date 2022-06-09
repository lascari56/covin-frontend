import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding-top: ${responsiveSize(30)};
  border-top: 1px solid #DFE7F0;

  display: flex;
  align-items: center;
`
export const Title = styled.p`
    font-weight: 500;
    font-size: ${responsiveSize(16)};
    line-height: 150%;

    color: #333333;
`

export const Contact = styled.div`
    margin-left: auto;

    display: flex;
    align-items: center;
`

export const Icon = styled.img`

`

export const Number = styled.p`
    margin-left: ${responsiveSize(8)};

    font-size: ${responsiveSize(16)};
    line-height: 150%;

    color: #333333;
`