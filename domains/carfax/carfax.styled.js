import styled from "styled-components";

import CarfaxForm from "./components/form"

import { responsiveSize } from "@utils/responsive";

export const Form = styled(CarfaxForm)`
  margin-bottom: ${responsiveSize(15)};
`