import React, { useMemo } from 'react';

import LotCardHeaderView from "./lot-card-header.view"

import moment from "moment-timezone"

const LotCardHeaderContainer = ({...props}) => {
  const date = useMemo(() => {
    const res = {theme: "base", value: ""}

    if (props.data?.auction_date_api) {
      const currentDate = moment();
      const _date = moment.tz(props.data?.auction_date_api, 'Etc/GMT').tz(moment.tz.guess());

      const timeLive = -60000 * 90;
      const time = +_date - +currentDate;

      if (time <= 0) {
        if (time > timeLive) {
          res = {
            theme: "green",
            value: "Live auction"
          }
        } else {
          res.value = "Completed"
        }
      } else {
        res.value = _date.format("DD MMM, HH:mm")
      }
    }

    res.value = "Future"

    return res
  }, [props.data?.auction_date_api])

  return (
    <LotCardHeaderView {...props} date={date} />
  );
}

export default LotCardHeaderContainer;
