import React from 'react'

import {Table} from "@components"

import LogsItem from "./components/item"

import * as S from './logs.styled'

const data = [
  {id: 1, "date": "23.04.2022", "type": "Balance", "amount": "146, 50 $", "status": "In processed", "info": null},
  {id: 2, "date": "23.04.2022", "type": "Subscription", "amount": "146, 50 $", "status": "Cancelled", "info": {from: "01.13.2022", to: "02.12.2022"}},
  {id: 3, "date": "23.04.2022", "type": "Balance", "amount": "146, 50 $", "status": "Success", "info": null},
  {id: 4, "date": "23.04.2022", "type": "Subscription", "amount": "146, 50 $", "status": "Cancelled", "info": null},
  {id: 5, "date": "23.04.2022", "type": "Balance", "amount": "146, 50 $", "status": "Success", "info": null},
]

const columns = [{label: "Date"}, {label: "Status"}, {label: "Message"}]

const LogsView = ({logs}) => {
  const renderItem = (item) => <LogsItem data={item} key={item?.id} />

  return (
    <S.Container>
      <Table data={logs?.data} columns={columns} renderItem={renderItem} />
    </S.Container>
  );
};

export default LogsView;
