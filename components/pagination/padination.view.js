import React from 'react'

import ReactPaginate from 'react-paginate';

import * as S from "./padination.styled"

export default function PadinationView({className, children, value, total, pageCount, onChange}) {
  return (
    <S.Container className={className}>
      <ReactPaginate
        className="pagination"
        activeLinkClassName="active"
        breakLabel="..."
        forcePage={value}
        onPageChange={(value) => onChange(value.selected)}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />

      {children}

      <S.Meta>Showing 1 to 10 of {total} entries</S.Meta>
    </S.Container>
  )
}
