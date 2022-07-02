import React from "react";



import CabinetTopLineEmail from './components/email'
import CabinetTopLineBalance from './components/balance'

import * as S from "./cabinet-top-line.styled";

const CabinetTopLineView = ({onLogout}) => {
  return (
   <S.Container>
      <S.Logo src="/images/logo.svg"/>

      <S.Content>
        <CabinetTopLineEmail/>

        <CabinetTopLineBalance/>

        <S.Logout theme="outline" title="Logout" onClick={() => onLogout()} />
      </S.Content>
   </S.Container>
  );
};

export default CabinetTopLineView;
