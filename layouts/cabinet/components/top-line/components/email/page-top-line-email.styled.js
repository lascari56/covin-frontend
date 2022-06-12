import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const Icon = styled.img`

` 

export const Title = styled.p`
    margin-left: ${responsiveSize(11)};

    font-weight: 500;
    font-size: ${responsiveSize(16)};
    line-height: ${responsiveSize(19)};
    letter-spacing: 0.02em;

    color: #292929;
`