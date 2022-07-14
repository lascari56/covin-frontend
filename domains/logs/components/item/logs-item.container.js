import React, {useState, useEffect, useMemo} from 'react';
import {STORAGE_URL} from '@configs/api';

import LogsItemView from './logs-item.view';

export default function LogsContainer({navigation, ...props}) {
  const fileLotsLink = useMemo(() => {
    if (!props.data.message || props.data.message.indexOf("File name saved:") === -1) return null;

    let item = props.data.message.split("File name saved:")[1].slice(1, 69);

    return `${STORAGE_URL}/${item}`;
  }, [props.data]);

  const fileLotsSeledLink = useMemo(() => {
    if (!props.data.message || props.data.message.indexOf("File selled name saved:") === -1) return null;

    let item = props.data.message.split("File selled name saved:")[1].slice(1);

    console.log("item", item.length);

    return `${STORAGE_URL}/${item}`;
  }, [props.data]);

  const handleOpenFIle = (selled) => {
    window.open(selled ? fileLotsSeledLink : fileLotsLink, "_blank");
  }

  return (
    <LogsItemView
      {...props}
      fileLotsLink={fileLotsLink}
      fileLotsSeledLink={fileLotsSeledLink}
      onOpenFile={handleOpenFIle}
    />
  );
}
