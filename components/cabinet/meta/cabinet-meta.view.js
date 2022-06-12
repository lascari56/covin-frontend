import React from 'react';

import * as S from "./cabinet-meta.styled"

const timeZoneOptions = [
  {label: "+02:00", value: "+02:00"},
  {label: "+03:00", value: "+03:00"},
  {label: "+04:00", value: "+04:00"},
]

const speedOptions = [
  {label: "Miles", value: "miles"},
  {label: "Kilometers", value: "kilometers"}
]

const CabinetMetaView = ({className}) => {
  return (
    <S.Container className={className}>
      <S.Search />

      <S.Select label="Speed" options={timeZoneOptions} />

      <S.Select label="Time" options={speedOptions} />

      <S.Select label="Sort by" placeholder="Please Select" />
    </S.Container>
  );
}

export default CabinetMetaView;
