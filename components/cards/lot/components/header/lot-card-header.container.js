import React, { useMemo } from 'react';

import LotCardHeaderView from "./lot-card-header.view"

import moment from "moment"

const LotCardHeaderContainer = ({...props}) => {
  const date = useMemo(() => {
    if (props.data?.auction_date) {
      return moment(props.data?.auction_date).format("DD MMM, HH:mm")
      // return moment.unix(props.data?.auction_date).utc().format("DD MMM, hh:mm A")
      // return moment(props.data?.auction_date).format("DD MMM, hh:mm A")
    }
  }, [props.data?.auction_date])

  return (
    <LotCardHeaderView {...props} date={date} />
  );
}

export default LotCardHeaderContainer;
