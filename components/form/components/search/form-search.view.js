import PropTypes from 'prop-types';

import React from 'react'

import * as S from "./form-search.styled"

function FormSearchView({className, size, isIcon}) {
  return (
    <S.Container className={className} size={size}>
      {isIcon && <S.Icon src="/images/search.svg" />}

      <S.Inner placeholder="Search..." isIcon={isIcon} />
    </S.Container>
  )
}

FormSearchView.defaultProps = {
  isIcon: true
}

export default FormSearchView;