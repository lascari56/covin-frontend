import styled from 'styled-components';

import {responsiveSize} from "@utils/responsive"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none !important;
  
  border-radius: ${responsiveSize(4)};

  cursor: pointer;
  transition: transform 0.4s;
  box-sizing: border-box;
  user-select: none;

  &:hover {
    transform: scale(0.95);
  }

  ${props => props.size === "small" && `
    padding: 0px ${responsiveSize(15)};
    height: ${responsiveSize(30)};
  `}

  ${props => props.size === "base" && `
    padding: 0px ${responsiveSize(24)};
    height: ${responsiveSize(44)};
  `}

  ${props => props.size === "big" && `
    padding: 0px ${responsiveSize(48)};
    height: ${responsiveSize(71)};
  `}

  ${props => props.theme === "blue" && `
    background: #216DD1;
  `}

  ${props => props.theme === "green" && `
    background: #3B8925;
  `}

  ${props => props.theme === "outline" && `
    border: 1px solid #216DD1;
  `}

  ${props => props.theme === "violet" && `
      background: #E3EAFF;
    `}
`

export const Title = styled.span`
  font-weight: 500;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};
  align-items: center;
  letter-spacing: 0.02em;

  color: #216DD1;

  ${props => (props.theme === "green" || props.theme === "blue") && `
    color: #ffffff;
  `}
`