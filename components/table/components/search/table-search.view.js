import React from 'react';

import Icon from "@components/icon"

import * as S from "./table-search.styled"

const TableSearchView = ({value, onChangeValue, onSearch}) => {
  return (
    <S.Container>
      <S.SearchIcon size="16" name="search" />

      <S.Inner
        value={value}
        placeholder="Search by VIN..."
        onChange={(e) => onChangeValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch(value)}
      />

      <S.Action onClick={() => onSearch(value)}>
        <Icon size="17" name="arrow-right" />
      </S.Action>
    </S.Container>
  );
}

export default TableSearchView;
