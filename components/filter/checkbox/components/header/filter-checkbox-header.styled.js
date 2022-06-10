import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: ${responsiveSize(42)};
  padding: 0px ${responsiveSize(7)};

  border-bottom: 1px solid #DFE7F0;
`

export const All = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px ${responsiveSize(8)};

  cursor: pointer;
`

export const AllLabel = styled.span`
  margin-left: ${responsiveSize(8)};

  font-weight: 300;
  font-size: ${responsiveSize(12)};
  line-height: ${responsiveSize(14)};
  letter-spacing: 0.02em;
  color: #216DD1;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Item = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px ${responsiveSize(6)};

  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    opacity: 0.8;
    transform: scale(0.95);
  }
`

export const Template = styled.span`
  font-size: ${responsiveSize(12)};
  line-height: ${responsiveSize(14)};
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #216DD1;
`

export const SaveTemplate = styled.span`
  font-size: ${responsiveSize(12)};
  line-height: ${responsiveSize(14)};
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #959090;
`