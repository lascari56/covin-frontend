import PropTypes from 'prop-types';

import React from 'react'

import * as S from "./form-search.styled"

function FormSearchView({className, autofocus, size, isIcon, value, onChange}) {
  return (
    <S.Container className={className} size={size}>
      {isIcon && <S.Icon src="/images/search.svg" />}

      <S.Inner placeholder="Search..." autofocus={autofocus} isIcon={isIcon} value={value} onChange={(e) => onChange(e.target.value)} />
    </S.Container>
  )
}

FormSearchView.defaultProps = {
  isIcon: true
}

export default FormSearchView;