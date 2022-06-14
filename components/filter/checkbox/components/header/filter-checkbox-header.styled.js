import styled from "styled-components";

import {FormCheckboxItem} from "@components/form/checkbox"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: ${responsiveSize(42)};
  /* padding: 0px ${responsiveSize(7)} 0px 0px; */

  border-bottom: 1px solid #DFE7F0;
`

export const CheckboxItem = styled(FormCheckboxItem)`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 1;
  padding: 0px ${responsiveSize(8)} 0px ${responsiveSize(15)};

  cursor: pointer;
`

export const AllLabel = styled.span`
  font-weight: 300;
  font-size: ${responsiveSize(12)};
  line-height: ${responsiveSize(14)};
  letter-spacing: 0.02em;
  color: #216DD1;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
`

export const Item = styled.div`
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