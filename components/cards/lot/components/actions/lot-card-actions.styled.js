import styled from "styled-components";

import LotCardActionsNotification from "@components/cards/notication"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-left: #DFE7F0 1px solid;
`

export const Item = styled.div`
  position: relative;
`

export const Notification = styled(LotCardActionsNotification)`
  position: absolute;
  right: 100%;
  bottom: 0px;
  min-width: ${responsiveSize(338)};

  z-index: 1;
`