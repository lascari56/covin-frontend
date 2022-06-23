import React from 'react';

import * as S from "./auth.styled"

const AuthView = ({children}) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}

export default AuthView;
