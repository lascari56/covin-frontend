import styled, { keyframes} from "styled-components";

import { responsiveSize } from "@utils/responsive";

const breatheAnimation = keyframes`
 0% { opacity: 1 }
 50% { opacity: 0.5 }
 100% { opacity: 1 }
`


export const Container = styled.div`
  padding: ${responsiveSize(9)} ${responsiveSize(20)};
  min-height: ${responsiveSize(48)};

  display: flex;
  align-items: center;
  background-color: #F1F6FC;

  ${props => props.isHidden && `
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

  ${props => props.isHidden && `
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

export const BuyNow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${responsiveSize(30)};
  padding: 0px ${responsiveSize(30)};
  margin-left: auto;
  margin-right: ${responsiveSize(14)};

  background: #3B8925;
  border-radius: ${responsiveSize(4)};
`

export const BuyNowLabel = styled.span`
  font-weight: 500;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  letter-spacing: 0.02em;
  color: #FFFFFF;
`

export const Date = styled.span`
  margin-left: ${responsiveSize(4)};

  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  letter-spacing: 0.02em;

  color: ${props => props.theme === "green" ? "green" : "#7C8DB5"};

  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: ${breatheAnimation};

  ${props => props.theme !== "green" && `
    animation-name: none;
  `}
`

export const CalendarIcon = styled.img`

`