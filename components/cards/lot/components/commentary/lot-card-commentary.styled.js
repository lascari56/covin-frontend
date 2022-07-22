import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${responsiveSize(20)};

  background-color: #FFF8E6;
  border-radius: 0px 0px ${responsiveSize(3)} ${responsiveSize(3)};
  border-top: 1px solid #DFE7F0;
`

export const Content = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  /* flex-direction: row; */
`

export const Title = styled.p`
  margin-right ${responsiveSize(10)};
  /* margin-bottom: ${responsiveSize(15)}; */

  font-size: ${responsiveSize(13)};
  line-height: ${responsiveSize(15)};
  letter-spacing: 0.02em;
  color: #959090;
`

export const Input = styled.input`
  padding: ${responsiveSize(5)} 0;

  background-color: #FFF8E6;

  flex: 1;

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