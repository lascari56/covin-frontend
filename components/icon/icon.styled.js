import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  width: ${props => responsiveSize(props.size)};
  height: ${props => responsiveSize(props.size)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`