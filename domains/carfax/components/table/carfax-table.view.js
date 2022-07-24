import React, {useEffect, useMemo} from 'react';

import {Table} from "@components"

import CarfaxTableRow from "./components/row"

import * as S from './carfax-table.styled'

const CarfaxTableView = ({type, data, page, total, pageCount, onChangePage, onSearch}) => {
  const renderItem = (item) => <CarfaxTableRow data={item} key={item?.id} type={type} />

  const columns = useMemo(() => {
    let res = [{label: "Date"}, {label: "VIN"}, {label: "Report"}];

    if (type === "carfax") res.push({label: "Free Sticker"});

    return res;
  }, [type])

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
        onSearch={onSearch}
      />
    </S.Container>
  );
}

export default CarfaxTableView;
