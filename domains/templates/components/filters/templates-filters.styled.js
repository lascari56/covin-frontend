import styled from "styled-components";

import {Button} from "@components"

import TemplatesFiltersCard from "./components/card"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(15)} ${responsiveSize(20)};
`

export const AddButton = styled(Button)`
  margin-bottom: ${responsiveSize(20)};
  height: ${responsiveSize(52)};
`

export const Title = styled.h4`
  margin-bottom: ${responsiveSize(25)};

  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: 150%;
`

export const Card = styled(TemplatesFiltersCard)`
  &:not(:last-child) {
    margin-bottom: ${responsiveSize(8)};
  }
`