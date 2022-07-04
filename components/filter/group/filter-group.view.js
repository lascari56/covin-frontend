import PropTypes from 'prop-types';

import React from 'react'

import * as S from "./filter-group.styled"

function FilterGroupView({title, children, show, short, disabled, onChangeShow, onAll, onClear}) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header show={show && !disabled} disabled={disabled} onClick={onChangeShow}>
          <S.Title disabled={disabled}>{title}</S.Title>

          <S.Arrow src="/images/arrow.svg" active={show && !disabled} />
        </S.Header>

        {short && show && !disabled && (
          <S.Actions onAll={onAll} onClear={onClear} />
        )}
      </S.Wrapper>

      {show && !disabled && (
        <S.Content>
          {children}
        </S.Content>
      )}
    </S.Container>
  )
}

FilterGroupView.defaultProps = {
  disabled: false
}

export default FilterGroupView;
