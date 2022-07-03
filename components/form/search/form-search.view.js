import PropTypes from 'prop-types';

import React, {useEffect, useRef, useLayoutEffect} from 'react'

import * as S from "./form-search.styled"

function FormSearchView({className, size, autofocus, isIcon, onChange, ...props}) {
  const innerRef = useRef()

  useLayoutEffect(() => {
    if (autofocus) {
      innerRef.current?.focus()
    }
  }, [autofocus])

  return (
    <S.Container className={className} size={size}>
      {isIcon && <S.Icon src="/images/search.svg" />}

      <S.Inner {...props} ref={innerRef} placeholder="Search..." isIcon={isIcon} onChange={(e) => onChange(e.target.value)} />
    </S.Container>
  )
}

FormSearchView.defaultProps = {
  isIcon: true
}

export default FormSearchView;