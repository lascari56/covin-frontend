import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  .form-control {
    width: 100%;
    height: ${responsiveSize(44)};
    padding-left: ${responsiveSize(48)};

    font-weight: 300;
    font-size: ${responsiveSize(14)};
    line-height: ${responsiveSize(16)};
    font-family: Roboto;

    border-color: #DFE7F0;
    background-color: #FAFBFC;

    ${props => props.isValid === false && 'border-color: #E03B4B;'}
  }

  .react-tel-input {
    
    .selected-flag {
      width: ${responsiveSize(38)};
      padding: 0 0 0 ${responsiveSize(8)};
      border-radius: ${responsiveSize(5)} 0 0 ${responsiveSize(5)};
      
    }

    .flag-dropdown {
      border-radius: ${responsiveSize(5)} 0 0 ${responsiveSize(5)};
      border-color: #DFE7F0;
      background-color: #FAFBFC;

      ${props => props.isValid === false && 'border-color: #E03B4B;'}
    }

    /* .flag {
      width: ${responsiveSize(16)};
      height: ${responsiveSize(11)};
    } */
  }
`

export const Label = styled.p`
  margin-bottom: ${responsiveSize(10)};

  font-weight: 300;
  font-size: ${responsiveSize(12)};
  line-height: ${responsiveSize(14)};
  letter-spacing: 0.02em;
  color: #7C8DB5;
`

export const Warning = styled.p`
  margin-top: ${responsiveSize(6)};

  font-weight: 300;
  font-size: ${responsiveSize(11)};
  line-height: ${responsiveSize(13)};
  color: #2DC946;
`