import React from 'react';

import * as S from "./filter-group-actions.styled"

const FilterGroupActionsView = ({ className, onAll, onClear }) => {
  return (
    <S.Container className={className}>
      {!!onAll && (
        <S.Item onClick={onAll}>
          <S.Label>Select all</S.Label>
        </S.Item>
      )}
      
      {!!onAll && !!onClear && <S.Hr />}
      
      {!!onClear && (
        <S.Item onClick={onClear}>
          <S.Label>Clear</S.Label>
        </S.Item>
      )}
    </S.Container>
  );
}

export default FilterGroupActionsView;
