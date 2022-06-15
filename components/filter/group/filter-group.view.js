import PropTypes from 'prop-types';

import React from 'react'

import * as S from "./filter-group.styled"

function FilterGroupView({title, children, show, disabled, onChangeShow}) {
  return (
    <S.Container>
      <S.Header disabled={disabled} onClick={onChangeShow}>
        <S.Title disabled={disabled}>{title}</S.Title>

        <S.Arrow src="/images/arrow.svg" active={show && !disabled} />
      </S.Header>
      
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
