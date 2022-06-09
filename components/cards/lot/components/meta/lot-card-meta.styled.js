import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #F1F6FC;
  border-radius: ${responsiveSize(4)};

  ${props => props.type === "hide" && `
    background: #FFFFFF;
  `}
`;

export const Label = styled.h6`
  margin-bottom: ${responsiveSize(6)};

  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  align-items: center;
  letter-spacing: 0.02em;
  color: #7C8DB5;
`

export const Value = styled.span`
  font-weight: 500;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  letter-spacing: 0.02em;
  color: #292929;
`