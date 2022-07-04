import React, {useState, useEffect, useMemo} from 'react';
import {API} from '@configs/api';

import LogsItemView from './logs-item.view';

export default function LogsContainer({navigation, ...props}) {
  const fileLotsLink = useMemo(() => {
    if (props.data.message.indexOf("File name saved:") === -1) return null;

    let item = props.data.message.split("File name saved:")[1].slice(1);

    return `${API}/lots/${item}.txt`;
  }, [props.data]);

  const handleOpenFIle = () => {
    window.open(fileLotsLink, "_blank");
  }

  return (
    <LogsItemView
      {...props}
      fileLotsLink={fileLotsLink}
      onOpenFile={handleOpenFIle}
    />
  );
}
