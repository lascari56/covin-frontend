import styled from "styled-components";


import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(15)};

  background: #F9FCFF;
  border: 1px solid #DFE7F0;
  border-radius: ${responsiveSize(3)};
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${responsiveSize(20)};

  border-bottom: 1px solid #DFE7F0;
`

export const Title = styled.h6`
  font-size: ${responsiveSize(14)};
  line-height: 150%;
  letter-spacing: 0.02em;
`