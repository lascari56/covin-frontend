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
  // {label: "Alphabet", value: "alphabet"},
  {label: "Date of adding (new first)", value: "date_adding_new"},
  {label: "Date of adding (old first)", value: "date_adding_old"},
]

// const showOptions = [
//   {label: "All", value: "all"},
//   {label: "Buy Now", value: "buy_now"},
//   {label: "Notification lots", value: "notification_lots"},
//   {label: "Commented lots", value: "commented_lots"},
//   {label: "Hide lots", value: "hide_lots"},
//   {label: "Purchased reports", value: "purchased_reports"},
// ]

const CabinetMetaView = ({className, formik, showOptions}) => {
  return (
    <S.Container className={className}>
      <S.Search 
        value={formik?.values?.search}
        onChange={value => formik.setFieldValue('search', value)}
      />

      {!!showOptions?.length && (
        <S.Select 
          displayType="left"
          label="Show"
          size="big"
          options={showOptions}
          value={formik?.values?.show}
          onChange={value => formik.setFieldValue('show', value)}
        />
      )}

      <S.Select
        displayType="left"
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
        displayType="left"
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
