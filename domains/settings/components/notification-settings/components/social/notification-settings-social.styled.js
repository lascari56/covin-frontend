import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
    margin-top: ${responsiveSize(20)};
    padding-bottom: ${responsiveSize(25)};
    
    border-bottom: 1px solid  #DFE7F0;
`

export const Social = styled.div`
    padding:${responsiveSize(14)};

    display: flex;
    align-items: center;

    border: 0.5px solid #DFE7F0;
    border-radius: ${responsiveSize(5)}; 
    background-color: #FAFBFC;

    &:not(:last-child) {
    margin-bottom: ${responsiveSize(8)};
  }
`

export const Icon = styled.img`

`

export const Title = styled.span`
    margin-left: ${responsiveSize(8)};

    font-size: ${responsiveSize(14)};
    line-height: ${responsiveSize(16)};
    letter-spacing: 0.02em;

    color: #292929;
`

export const Status = styled.span`
    margin-left: ${responsiveSize(8)};

    font-size: ${responsiveSize(14)};
    line-height: ${responsiveSize(16)};
    letter-spacing: 0.02em;

    color: #3B8925;
`

export const Trash = styled.img`
    margin-left: auto;
    padding: ${responsiveSize(5)};

    background: #FFFFFF;
    border: 1px solid #DFE7F0;

    border-radius: ${responsiveSize(11)};

    cursor: pointer;
`