import React, {useEffect, useRef} from 'react'
import PropTypes from 'prop-types';

import * as S from "./form-input.styled"

function FormInputView({ className, autofocus, label, size, theme, type, isValid, onChange, ...props}) {
  const innerRef = useRef()

  useEffect(() => {
    if (autofocus) {
      innerRef.current?.focus()
    }
  }, [autofocus])

  return (
    <S.Container className={className}>
      {!!label && <S.Label type={type}>{label}</S.Label>}

      <S.Input {...props} ref={innerRef} size={size} theme={theme} isValid={isValid} onChange={event => onChange(event.target.value)} />
    </S.Container>
  )
}

FormInputView.propTypes = {
  isValid: PropTypes.bool,
};

FormInputView.defaultProps = {
  isValid: true,
};

export default FormInputView;
