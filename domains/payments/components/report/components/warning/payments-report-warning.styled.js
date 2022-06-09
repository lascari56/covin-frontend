import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
    margin-top:${responsiveSize(20)};
    margin-bottom: ${responsiveSize(30)};
    padding: 20px;

    background: #FFF8E5;
    border-radius:${responsiveSize(5)};

`

export const Description = styled.p`

    font-weight: 400;
    font-size: ${responsiveSize(14)};
    line-height: 150%;

    color: #D68D21;
`