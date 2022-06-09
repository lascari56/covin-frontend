import styled from "styled-components";

import CabinetSidebar from "./components/sidebar"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;

  margin-left: ${props => props.full ? responsiveSize(232) : responsiveSize(76)};
`

export const Sidebar = styled(CabinetSidebar)`
  position: absolute;
  left: 0px;
`