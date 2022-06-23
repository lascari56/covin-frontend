import React from 'react'

import {Icon} from "@components"

// import ReactPaginate from 'react-paginate';

import * as S from "./padination.styled"

export default function PadinationView({className, children, localValue, value, total, pageCount, onNext, onPrev, onChangeLocalValue, onBlur}) {
  return (
    <S.Container className={className}>
      <S.Content>
        <S.Item disabled={value === 0} onClick={onPrev}>
          <Icon name="arr-left" />
        </S.Item>

        <S.Item disabled={value === total} onClick={onNext}>
          <Icon name="arr-right" />
        </S.Item>

        <S.Inner size="small" theme="white" value={localValue} onChange={onChangeLocalValue} onBlur={onBlur} />
      </S.Content>

      {children}

      <S.Meta>Showing {value + 1} to {pageCount} of {total} entries</S.Meta>
    </S.Container>
  )
}


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