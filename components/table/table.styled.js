import styled from "styled-components";

import PaginationCustom from "@components/pagination"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  
`

export const Content = styled.div`
  border-radius: ${responsiveSize(12)};
  border: 1px solid #DFE7F0;

  overflow: hidden;
`

export const Children = styled.div`
  padding: ${responsiveSize(15)};
`

export const Pagination = styled(PaginationCustom)`
  margin-top: ${responsiveSize(36)};
`

export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;
  border-spacing: 0;

  thead {
    background-color: #F1F6FC;
  }

  th {
    font-size: ${responsiveSize(14)};
    line-height: 150%;
    color: #7C8DB5;
    text-align: left;
  }

  td {
    font-size: ${responsiveSize(14)};
    line-height: 150%;
    color: #333333;
  }

  th, td {
    padding: 0px ${responsiveSize(30)};
  }

  tr:last-child td {
    padding-bottom: ${responsiveSize(15)};
  }

  tr:first-child td {
    padding-top: ${responsiveSize(15)};
  }
`

export const Label = styled.div`
  display: flex;
  align-items: center;
  min-height: ${responsiveSize(40)};
`

export const Item = styled.div`
  min-height: ${responsiveSize(40)};
`