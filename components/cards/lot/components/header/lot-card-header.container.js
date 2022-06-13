import React, { useMemo } from 'react';

import LotCardHeaderView from "./lot-card-header.view"

import moment from "moment"

const LotCardHeaderContainer = ({...props}) => {
  const date = useMemo(() => {
    if (props.data?.auction_date) {
      // return moment.utc(props.data?.auction_date).format("DD MMM, HH:mm A")
      return moment(props.data?.auction_date).format("DD MMM, HH:mm A")
    }
  }, [props.data?.auction_date])

  return (
    <LotCardHeaderView {...props} date={date} />
  );
}

export default LotCardHeaderContainer;
