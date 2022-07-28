import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  max-width: 50%;
  
  display: flex;
  align-items: flex-end;
`

export const Title = styled.p`
  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: 150%;
  color: #333333;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.p`
  margin-top: ${responsiveSize(20)};

  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: 150%;

  color: #7C8DB5;
`

export const Payment = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`

export const Icon = styled.img`
  &:not(:last-child) {
    margin-right: ${responsiveSize(9)};
  }
`