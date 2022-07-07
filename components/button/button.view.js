import PropTypes from 'prop-types';
import React from 'react'

import * as S from "./button.styled"

function ButtonView({ className, title, size, to, theme, disabled, IconComponent, onClick}) {
  return (
    <S.Container className={className} size={size} theme={theme} disabled={disabled} onClick={!disabled ? onClick : undefined}>
      {!!IconComponent && <S.Icon>{IconComponent}</S.Icon>}

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