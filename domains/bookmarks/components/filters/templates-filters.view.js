import React from 'react';

import {Loader} from "@components"

import * as S from "./templates-filters.styled"

const TemplatesFiltersView = ({items, value, onChange}) => {
  return (
    <S.Container>
      <S.AddButton title="New Template" to="/cabinet/templates/create" />

      {!!items?.data?.length && (
        <>
          <S.Title>Templates list</S.Title>

          {items?.data?.map(item => (
            <S.Card
              title={item?.name}
              active={item?._id === value}
              key={item?._id}
              onClick={() => onChange(item?._id)}
            />
          ))}
        </>
      )}

      {items?.loading && <Loader isBackground />}
    </S.Container>
  );
}

export default TemplatesFiltersView;
