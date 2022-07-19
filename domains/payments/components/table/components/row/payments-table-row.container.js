import React, {useState, useEffect, useMemo} from 'react';

import PaymentsTableRowView from './payments-table-row.view';

export default function PaymentsContainer({navigation, ...props}) {
  const status = useMemo(() => {
    if (props?.data?.data?.transactionStatus === "Approved") return "Success"
    else if (props?.data?.data?.transactionStatus === "Refunded" || props?.data?.data?.transactionStatus === "Declined") return "Cancelled"
    else return "In processed"
  }, [props.data?.data]);

  return (
    <PaymentsTableRowView
      {...props}
      status={status}
    />
  );
}
