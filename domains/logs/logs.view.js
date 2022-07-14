import React from 'react'

import {Table} from "@components"

import LogsItem from "./components/item"


import * as S from './logs.styled'

const columns = [{label: "Date"}, {label: "Status"}, {label: "Message"}, {label: "Api"}, {label: "Client"}, {label: "Vin"}, {label: "Actions"}]

const LogsView = ({logs, page, pageCount, onChangePage}) => {
  const renderItem = (item) => <LogsItem data={item} key={item?.id} />

  return (
    <S.Container>
      <Table 
        data={logs?.data}
        columns={columns}
        renderItem={renderItem}
        page={page}
        total={logs?.total}
        pageCount={pageCount}
        onChangePage={onChangePage}
      />
    </S.Container>
  );
};

export default LogsView;
