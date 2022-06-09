import styled from "styled-components";

import {Button} from "@components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: ${responsiveSize(66)};
  padding: ${responsiveSize(12)} ${responsiveSize(13)} ${responsiveSize(12)} ${responsiveSize(25)};

  background: #FFFFFF;
  border-bottom: 1px solid #DFE7F0;
`;

export const Logo = styled.img`
  width: ${responsiveSize(89)};
  height: ${responsiveSize(24)};
`

export const Content = styled.div`
  margin-left: auto;
  margin-right: 13px;

  display: flex;
  align-items: center;
`

export const Logout = styled(Button)`
  margin-left: ${responsiveSize(40)};
`