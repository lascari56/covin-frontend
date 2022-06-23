import React, {useState, useEffect, useMemo} from 'react';

import {api} from '../../utils/api.util';

import LogsView from './logs.view';

export default function LogsContainer({navigation, ...props}) {
  const [logs, setLogs] = useState({});
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleLoadLogs();
  }, []);

  const handleLoadLogs = async () => {
    const res = await api.service('logs').find({});

    setLogs({...res})
    setLoading(false)
  };
  
  const handlePageMore = () => {
    setPage(page + 1)
  }

  return (
    <LogsView
      {...props}
      logs={logs}
      page={page}
      // pageCount={pageCount}
      loading={loading}
    />
  );
}
