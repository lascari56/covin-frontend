import PropTypes from 'prop-types';
import React from 'react'

import * as S from "./button.styled"

function ButtonView({ className, title, size, to, theme, disabled, onClick}) {
  return (
    <S.Container className={className} to={to} size={size} theme={theme} disabled={disabled} onClick={!disabled ? onClick : undefined}>
      <S.Title size={size} theme={theme}>{title}</S.Title>
    </S.Container>
  )
}

ButtonView.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
}

ButtonView.defaultProps = {
  size: "base",
  theme: "blue",
  disabled: false
}

export default ButtonView;