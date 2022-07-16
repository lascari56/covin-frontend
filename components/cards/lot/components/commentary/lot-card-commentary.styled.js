import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: ${responsiveSize(24)} ${responsiveSize(20)};

  background-color: #FFF8E6;
  border-radius: 0px 0px ${responsiveSize(3)} ${responsiveSize(3)};
  border-top: 1px solid #DFE7F0;
`

export const Content = styled.div`
  flex: 1;
`

export const Title = styled.p`
  margin-bottom: ${responsiveSize(15)};

  font-size: ${responsiveSize(13)};
  line-height: ${responsiveSize(15)};
  letter-spacing: 0.02em;
  color: #959090;
`

export const Description = styled.p`
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  letter-spacing: 0.02em;
  color: #292929;
`

export const Close = styled.div`
  padding: ${responsiveSize(8)};

  cursor: pointer;
  transition: all 0.4s;

  :hover {
    opacity: 0.5;
  }
`