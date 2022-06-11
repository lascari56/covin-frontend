import styled from "styled-components";

import {LotCard} from '@components/cards';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  flex-grow: 1;
`

export const Card = styled(LotCard)`
  &:not(:last-child) {
    margin-bottom: ${responsiveSize(12)};
  }
`