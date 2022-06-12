import React from 'react'

import ReactPaginate from 'react-paginate';

import * as S from "./padination.styled"

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export default function PadinationView({children, value, total, pageCount, onChange}) {
  return (
    <S.Container>
      <ReactPaginate
        className="pagination"
        activeLinkClassName="active"
        breakLabel="..."
        // nextLabel="next >"
        onPageChange={(value) => onChange(value.selected)}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        // previousLabel="< previous"
        renderOnZeroPageCount={null}
      />

      {children}

      <S.Meta>Showing 1 to 10 of {total} entries</S.Meta>
    </S.Container>
  )
}
