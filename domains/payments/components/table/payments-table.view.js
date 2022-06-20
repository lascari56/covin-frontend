import React from 'react';

import {Table} from "@components"

import PaymentsTableRow from "./components/row"

import * as S from './payments-table.styled'

const data = [
  {id: 1, "date": "23.04.2022", "type": "Balance", "amount": "146, 50 $", "status": "In processed", "info": null},
  {id: 2, "date": "23.04.2022", "type": "Subscription", "amount": "146, 50 $", "status": "Cancelled", "info": {from: "01.13.2022", to: "02.12.2022"}},
  {id: 3, "date": "23.04.2022", "type": "Balance", "amount": "146, 50 $", "status": "Success", "info": null},
  {id: 4, "date": "23.04.2022", "type": "Subscription", "amount": "146, 50 $", "status": "Cancelled", "info": null},
  {id: 5, "date": "23.04.2022", "type": "Balance", "amount": "146, 50 $", "status": "Success", "info": null},
]

const columns = [{label: "Date"}, {label: "Type"}, {label: "Amount"}, {label: "Status"}, {label: "Info"}]

const PaymentsTableView = ({className}) => {
  const renderItem = (item) => <PaymentsTableRow data={item} key={item?.id} />

  return (
    <S.Container className={className}>
      <Table data={data} columns={columns} renderItem={renderItem} />
    </S.Container>
  );
}

export default PaymentsTableView;
