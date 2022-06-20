import React from 'react';

import Icon from "@components/icon"

import * as S from "./table-search.styled"

const TableSearchView = () => {
  return (
    <S.Container>
      <S.SearchIcon size="16" name="search" />

      <S.Inner placeholder="Search by VIN..." />

      <S.Action>
        <Icon size="17" name="arrow-right" />
      </S.Action>
    </S.Container>
  );
}

export default TableSearchView;
