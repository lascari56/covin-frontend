import PropTypes from 'prop-types';

import React, {useEffect, useRef} from 'react'

import * as S from "./form-search.styled"

function FormSearchView({className, autofocus, size, isIcon, value, onChange}) {
  const innerRef = useRef()

  useEffect(() => {
    if (autofocus) {
      innerRef.current?.focus()
    }
  }, [autofocus])

  return (
    <S.Container className={className} size={size}>
      {isIcon && <S.Icon src="/images/search.svg" />}

      <S.Inner ref={innerRef} placeholder="Search..." autofocus={autofocus} isIcon={isIcon} value={value} onChange={(e) => onChange(e.target.value)} />
    </S.Container>
  )
}

FormSearchView.defaultProps = {
  isIcon: true
}

export default FormSearchView;