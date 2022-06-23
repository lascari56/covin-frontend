import React from 'react'

import {Icon} from "@components"

// import ReactPaginate from 'react-paginate';

import * as S from "./padination.styled"

export default function PadinationView({className, children, value, total, pageCount, onChange}) {
  return (
    <S.Container className={className}>
      <div>
        <Icon name="arr-left" />

        <Icon name="arr-right" />
      </div>

      <S.Inner size="small" theme="white" onChange={() => {}} />
      {/* <ReactPaginate
        className="pagination"
        activeLinkClassName="active"
        breakLabel="..."
        forcePage={value}
        onPageChange={(value) => onChange(value.selected)}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      /> */}

      {children}

      <S.Meta>Showing {value + 1} to {pageCount} of {total} entries</S.Meta>
    </S.Container>
  )
}
