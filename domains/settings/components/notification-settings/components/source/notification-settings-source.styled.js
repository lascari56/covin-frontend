import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
    display: flex;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title =  styled.span`
    margin-top: ${responsiveSize(30)};

    font-weight: 500;
    font-size: ${responsiveSize(16)};
    line-height: 150%;

    color: #333333;
`

export const Description = styled.span`
    margin-top: ${responsiveSize(20)};
    margin-bottom: ${responsiveSize(20)};

    font-style: normal;
    font-weight: 300;
    font-size: ${responsiveSize(14)};
    line-height: 150%;

    color: #7C8DB5;
`