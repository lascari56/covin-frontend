import styled from "styled-components";

import CustomModal from 'react-modal';

import { responsiveSize } from "@utils/responsive";

export const Modal = styled(CustomModal).attrs({
  style: {
    overlay: {
      // height: "100%",
      // width: "70vw",
      // width: "100vw",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: responsiveSize(32),
    }
  }
})`
  z-index: 2;
`

export const Container = styled.div`
  /* height: 100%;
  width: 100vw; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${responsiveSize(32)};

  overflow-y: auto;

  overflow-x: hidden;
`

export const Image = styled.div`
  width: 60vw;
  height: calc(60vw / 4 * 3);

  background: rgba(255, 255, 255, 1) url("${props => props.url}") no-repeat;
  background-size: cover;
  border-radius: ${responsiveSize(5)};

  :not(:last-child) {
    margin-bottom: ${responsiveSize(12)};
  }
`