import React from 'react';

import {Table} from "@components"

import CarfaxTableRow from "./components/row"

import * as S from './carfax-table.styled'

// const data = [
//   {id: 1, "date": "23.04.2022", "vin": "1N4AZ0CP1FC315387", "report": {}, "sticker": "Free Sticker"},
//   {id: 2, "date": "23.04.2022", "vin": "1N4AZ0CP1FC315387", "report": {}, "sticker": "Free Sticker"},
//   {id: 3, "date": "23.04.2022", "vin": "1N4AZ0CP1FC315387", "report": {}, "sticker": "Free Sticker"},
//   {id: 4, "date": "23.04.2022", "vin": "1N4AZ0CP1FC315387", "report": {}, "sticker": "Free Sticker"},
//   {id: 5, "date": "23.04.2022", "vin": "1N4AZ0CP1FC315387", "report": {}, "sticker": "Free Sticker"},
//   {id: 6, "date": "23.04.2022", "vin": "1N4AZ0CP1FC315387", "report": {}, "sticker": "Free Sticker"},
//   {id: 7, "date": "23.04.2022", "vin": "1N4AZ0CP1FC315387", "report": {}, "sticker": "Free Sticker"},
//   {id: 8, "date": "23.04.2022", "vin": "1N4AZ0CP1FC315387", "report": {}, "sticker": "Free Sticker"},
// ]

const columns = [{label: "Date"}, {label: "VIN"}, {label: "Report"}, {label: "Free Sticker"}]

const CarfaxTableView = ({data, page, total, pageCount, onChangePage}) => {
  const renderItem = (item) => <CarfaxTableRow data={item} key={item?.id} />

  return (
    <S.Container>
      <Table 
        data={data} 
        columns={columns} 
        renderItem={renderItem}
        page={page}
        total={total}
        pageCount={pageCount}
        onChangePage={onChangePage}
        onSearch={() => {}}
      />
    </S.Container>
  );
}

export default CarfaxTableView;
