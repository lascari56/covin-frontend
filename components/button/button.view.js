import PropTypes from 'prop-types';
import React from 'react'

import * as S from "./button.styled"

function ButtonView({ className, title, size, to, theme, onClick}) {
  return (
    <S.Container  className={className} to={to} size={size} theme={theme} onClick={onClick}>
      <S.Title size={size} theme={theme}>{title}</S.Title>
    </S.Container>
  )
}

ButtonView.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.string,
}

ButtonView.defaultProps = {
  size: "base",
  theme: "blue",
}

export default ButtonView;