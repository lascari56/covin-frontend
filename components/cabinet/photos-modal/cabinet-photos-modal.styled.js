import styled from "styled-components";

import CustomModal from 'react-modal';

import { responsiveSize } from "@utils/responsive";

export const Modal = styled(CustomModal).attrs({
  style: {
    content: {
      height: "100%",
      width: "100vw"
    }
  }
})`
  z-index: 2;
`

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${responsiveSize(32)};

  overflow-y: auto;

  overflow-x: hidden;
`

export const Image = styled.img`
  max-width: 80vw;
  height: 80vh;
  /* border-radius: ${responsiveSize(8)}; */
  background: #fff;

  :first-child {
    border-radius: ${responsiveSize(8)} ${responsiveSize(8)} 0px 0px;
  }

  :last-child {
    /* margin-bottom: ${responsiveSize(8)}; */
    border-radius: 0px 0px ${responsiveSize(8)} ${responsiveSize(8)};
  }
`