import React from 'react';

import * as S from "./auth.styled"

const AuthView = ({children, title}) => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo src="/images/logo.svg" />

        <S.Title>{title}</S.Title>

        <S.Children>
          {children}
        </S.Children>
      </S.Content>
    </S.Container>
  );
}

export default AuthView;
