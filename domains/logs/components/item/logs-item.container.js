import React, {useState, useEffect, useMemo} from 'react';
import {API} from '@configs/api';

import LogsItemView from './logs-item.view';

export default function LogsContainer({navigation, ...props}) {
  const handleOpenFIle = () => {
    let items = props.data.message.split(":");

    items = items[items.length - 1].slice(1);

    window.open(`${API}/lots/${items}.txt`, "_blank");
  }

  return (
    <LogsItemView
      {...props}
      onOpenFile={handleOpenFIle}
    />
  );
}
