import React, { useMemo } from 'react';

import LotCardHeaderView from "./lot-card-header.view"

import moment from "moment-timezone"

const LotCardHeaderContainer = ({...props}) => {
  const date = useMemo(() => {
    if (props.data?.auction_date_api) {
      return moment.tz(props.data?.auction_date_api, 'Etc/GMT').tz(moment.tz.guess()).format("DD MMM, HH:mm")
    }
  }, [props.data?.auction_date_api])

  return (
    <LotCardHeaderView {...props} date={date} />
  );
}

export default LotCardHeaderContainer;
