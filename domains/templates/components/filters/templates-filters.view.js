import React from 'react';

import * as S from "./templates-filters.styled"

const TemplatesFiltersView = ({items, value, onChange}) => {
  return (
    <S.Container>
      <S.AddButton title="New Template" to="/cabinet/templates/create" />

      <S.Title>Templates list</S.Title>

      {items?.map(item => (
        <S.Card
          title={item?.name}
          active={item?._id === value}
          key={item?._id}
          onClick={() => onChange(item?._id)}
        />
      ))}
    </S.Container>
  );
}

export default TemplatesFiltersView;
