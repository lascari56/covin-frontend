import styled from "styled-components";

import Button from "@components/button"

import LotCardMeta from './components/meta'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  background: #FFFFFF;
  border: 1px solid #DFE7F0;
  border-radius: 4px;

  overflow: hidden;
`;

export const Body = styled.div`
  display: flex;

  ${props => props.type === "hide" && `
    background: #F7F7F7;
  `}
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${responsiveSize(20)} 0px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px ${responsiveSize(20)};
  margin-top: ${responsiveSize(20)};

  align-items: center;
`

export const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: calc((100% - ${responsiveSize(6)} * 4) / 5);

  &:not(:last-child) {
    margin-right: ${responsiveSize(6)};
  }
`

export const ActionButton = styled(Button)`
  flex: 1;

  &:not(:last-child) {
    margin-bottom: ${responsiveSize(8)};
  }
`

export const Meta = styled(LotCardMeta)`
  flex: 1;

  &:not(:last-child) {
    margin-bottom: ${responsiveSize(8)};
  }
`
