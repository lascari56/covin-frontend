import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(30)} ${responsiveSize(25)} ${responsiveSize(25)};

  border: 1px solid #DFE7F0;
  border-radius: ${responsiveSize(13)};
`

export const Header = styled.div`
  padding-bottom: ${responsiveSize(20)};
  display: flex;
  align-items: center;
  

  border-bottom: 1px solid #DFE7F0;;
`

export const Icon = styled.div`
  margin-right: ${responsiveSize(8)};
`

export const Title = styled.h5`
  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: ${responsiveSize(26)};
  color: #333333;
`

export const Content = styled.div`
  padding-top: ${responsiveSize(30)};
`