import React, {useMemo} from 'react';

import LotCardView from './lot-card.view';

import {meta} from "./lot-card.data"

export default function LotCardContainer({speedUnit, ...props}) {
  const renderMeta = useMemo(() => {
    let res = [];

    for (let column of meta) {
      let resColumn = [];

      for (let item of column) {
        let value = props.data[item.key];

        if (item.key === 'odometer') {
          let _value = speedUnit === "km" ? Math.floor(value * 1.6) : value;
          // const unit = speedUnit === "km" ? "km" : "ml";

          value = `${_value} ${speedUnit}`;
        } 
      
        resColumn.push({
          icon: item.icon,
          value
        });
      }

      res.push(resColumn);
    }

    return res;
  }, [props.data, speedUnit]);


  const links = useMemo(() => {
    const lot_link = props.data?.site === "1" ? `https://www.copart.com/lot/${props.data?.lot_id}` : `https://www.iaai.com/vehicledetails/${props.data?.item_id}`;

    return {
      lot_link
    }
  }, [props.data])

  return (
    <LotCardView
      {...props}
      renderMeta={renderMeta}
      links={links}
    />
  );
}
