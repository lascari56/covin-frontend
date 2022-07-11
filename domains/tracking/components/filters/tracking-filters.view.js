import React from 'react';

import * as S from "./tracking-filters.styled"

const TrackingFiltersView = ({ value, items, onChange }) => {
  return (
    <S.Container>
      <S.AddButton title="New Tracking" to="/cabinet/tracking/create" />

      {!!items?.data?.length && (
        <>
          <S.Title>Tracking list</S.Title>

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
    </S.Container>
  );
}

export default TrackingFiltersView;
