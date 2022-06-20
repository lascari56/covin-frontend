import React from 'react';

import * as S from "./table-search.styled"

const TableSearchView = () => {
  return (
    <S.Container>
      <S.Inner placeholder="Search by VIN..." />
    </S.Container>
  );
}

export default TableSearchView;
