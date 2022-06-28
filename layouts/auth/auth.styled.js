import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #F2F7FF;
`

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${responsiveSize(432)};
  width: 100%;
  padding: ${responsiveSize(36)} ${responsiveSize(25)} ${responsiveSize(20)};

  background-color: #fff;
  border-radius: ${responsiveSize(5)};
`

export const Children = styled.div`
  width: 100%;
`

export const Logo = styled.img`
  width: ${responsiveSize(89)};
  height: ${responsiveSize(24)};
  margin-bottom: ${responsiveSize(12)};
`

export const Title = styled.h1`
  margin-bottom: ${responsiveSize(34)};

  font-weight: 500;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(28)};
  letter-spacing: 0.02em;
`