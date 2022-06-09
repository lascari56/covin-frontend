import styled from "styled-components";

import CardContentItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div``

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const Item = styled(CardContentItem)`
  &:not(:last-child) {
    margin-bottom: ${responsiveSize(20)};
  }
`