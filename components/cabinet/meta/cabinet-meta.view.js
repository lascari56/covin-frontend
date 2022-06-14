import React from 'react';

import * as S from "./cabinet-meta.styled"

// const timeZoneOptions = [
//   {label: "+02:00", value: "+02:00"},
//   {label: "+03:00", value: "+03:00"},
//   {label: "+04:00", value: "+04:00"},
// ]

const speedOptions = [
  {label: "Miles", value: "miles"},
  {label: "Km", value: "km"}
]

const sortOptions = [
  {label: "Auction date", value: "auction_date"},
  {label: "Date of adding (new first)", value: "date_adding_new"},
  {label: "Date of adding (old first)", value: "date_adding_old"},
]

const CabinetMetaView = ({className, formik}) => {
  return (
    <S.Container className={className}>
      <S.Search 
        value={formik?.values?.search}
        onChange={value => formik.setFieldValue('search', value)}
      />

      <S.Select
        label="Speed"
        size="big"
        options={speedOptions}
        value={formik?.values?.speed}
        onChange={value => formik.setFieldValue('speed', value)}
      />

      {/* <S.Select
        label="Time"
        options={timeZoneOptions}
        value={formik?.values?.time}
        onChange={value => formik.setFieldValue('time', value)}
      /> */}

      <S.Select 
        label="Sort by"
        size="big"
        options={sortOptions}
        value={formik?.values?.sort}
        onChange={value => formik.setFieldValue('sort', value)}
      />
    </S.Container>
  );
}

export default CabinetMetaView;
