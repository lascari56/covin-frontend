import React, {useEffect, useState} from 'react';

import LotsView from './lots.view';

import {api} from '../../utils/api.util';

export default function СontactsContainer({navigation, ...props}) {
  const [lots, setLots] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleLoadLots()
  }, []);

  const handleLoadLots = async () => {
    const res = await api.service('cars?full=true').find({});

    setLots({...res})
    setLoading(false)
  };

  return (
    <LotsView
      {...props}
      lots={lots}
    />
  );
}
