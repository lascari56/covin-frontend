import styled from "styled-components";

import Button from "@components/button"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(9)} ${responsiveSize(20)};
  min-height: ${responsiveSize(48)};

  display: flex;
  align-items: center;
  background-color: #F1F6FC;

  ${props => props.type === "hide" && `
    background: #E4E3E4;
  `}
`

export const Logo = styled.img`
  ${props => props.site === "1" && `
    width: ${responsiveSize(49)};
    height: ${responsiveSize(18)};
  `}

  ${props => props.site === "2" && `
    width: ${responsiveSize(32)};
    height: ${responsiveSize(18)};
  `}
`

export const Title = styled.span`
  flex: 1;
  margin-left: ${responsiveSize(10)};
  
  font-weight: 500;
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(18)};
  letter-spacing: 0.02em;

  color: #000000;

  ${props => props.type === "hide" && `
    color: #838383;
  `}
`

export const Link = styled.span`
  margin-left: ${responsiveSize(4)};

  font-size: ${responsiveSize(12)};
  line-height: ${responsiveSize(18)};
  letter-spacing: 0.02em;
  text-decoration-line: underline;
  color: #1A6CEB;

  cursor: pointer;
`

export const Hide = styled.span`
  margin-left: ${responsiveSize(4)};

  color: #FF0E0E;
  font-size: ${responsiveSize(12)};
  line-height: ${responsiveSize(14)};
`

export const BuyButton = styled(Button)`
  margin-left: auto;
  margin-right: ${responsiveSize(14)};
`

export const Date = styled.span`
  margin-left: ${responsiveSize(4)};

  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  letter-spacing: 0.02em;

  color: ${props => props.theme === "green" ? "green" : "#7C8DB5"};
`

export const CalendarIcon = styled.img`

`