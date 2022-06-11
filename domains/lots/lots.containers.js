import React, {useState, useEffect, useMemo} from 'react';

import {api} from '../../utils/api.util';

import LotsView from './lots.view';

export default function СontactsContainer({navigation, ...props}) {
  const [page, setPage] = useState(0);
  const [lots, setLots] = useState(null);
  const [loading, setLoading] = useState(true);

  const pageCount = useMemo(() => {
    return Math.ceil(lots?.total / lots?.limit);
  }, [lots?.total, lots?.limit]);

  useEffect(() => {
    handleLoadLots();
  }, []);

  const handleLoadLots = async () => {
    const res = await api.service('cars?full=true').find({});

    setLots({...res})
    setLoading(false)
  }

  const handleGetLots = async (value) => {
    setPage(value)
    setLoading(true)

    const res = await api.service('cars').find({
      query: {
        $skip: value * 10,
        read: false
      }
    });

    setLots({...lots, ...res})
    setLoading(false)
  };

  return (
    <LotsView
      {...props}
      lots={lots}
      page={page}
      pageCount={pageCount}
      loading={loading}
      onChangePage={handleGetLots}
    />
  );
}
