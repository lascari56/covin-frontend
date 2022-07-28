import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${responsiveSize(25)};

  border: 1px solid #DFE7F0;
  border-radius: 13px;
`

export const Title = styled.h1`
  margin-bottom: ${responsiveSize(6)};

  text-align: center;
  font-weight: 500;
  font-size: ${responsiveSize(18)};
  line-height: 150%;
`

export const Description = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: 150%;
  font-weight: 600;
`

export const Or = styled.p`
  margin: ${responsiveSize(10)} 0px;

  text-align: center;
  font-size: ${responsiveSize(15)};
  line-height: 130%;
  color: #216DD1;
`