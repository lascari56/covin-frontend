import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  margin-left: ${responsiveSize(40)};

  display: flex;
  align-items: center;
`

export const Icon = styled.img`
  color: #216DD1;
`   

export const Title = styled.p`
  margin-left: ${responsiveSize(8)};

  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(19)};
  letter-spacing: 0.02em;
  color: #292929;
`

export const Balance = styled.p`
  margin-left: ${responsiveSize(10)};
  margin-right: ${responsiveSize(20)};

  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: ${responsiveSize(21)};
  letter-spacing: 0.02em;
  color: #7C8DB5;
`

export const Add = styled.div`
  width: ${responsiveSize(42)};
  height: ${responsiveSize(42)};
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #DFE7F0;
  border-radius: ${responsiveSize(4)};

  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    transform: scale(0.9);
  }
`