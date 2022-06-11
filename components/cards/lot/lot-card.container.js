import React, {useMemo} from 'react';

import LotCardView from './lot-card.view';

import {meta} from "./lot-card.data"

export default function LotCardContainer({...props}) {
  const renderMeta = useMemo(() => {
    let res = [];

    for (let column of meta) {
      let resColumn = [];

      for (let item of column) {
        let value = props.data[item.key];

        if (item.key === 'odometer') {
          value = `${value} ml`;
        } else if (item.key === 'vin') {
          value = `${value.slice(0, -6)}******`;
        } 

        resColumn.push({
          icon: item.icon,
          value
        });
      }

      res.push(resColumn);
    }

    return res;
  }, [props.data]);

  return (
    <LotCardView
      {...props}
      renderMeta={renderMeta}
    />
  );
}
