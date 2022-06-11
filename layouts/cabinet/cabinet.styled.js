import styled from "styled-components";

import CabinetSidebar from "./components/sidebar"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: ${props => props.full ? responsiveSize(232) : responsiveSize(76)};
`

export const Sidebar = styled(CabinetSidebar)`
  position: absolute;
  top: 0px;
  left: 0px;

  z-index: 1;
`