import React, {useState, useEffect, useMemo} from 'react';

import {api} from '../../utils/api.util';

import LogsView from './logs.view';

export default function LogsContainer({navigation, ...props}) {
  const [logs, setLogs] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const pageCount = useMemo(() => {
    return Math.ceil(logs?.total / logs?.limit);
  }, [logs?.total, logs?.limit]);

  useEffect(() => {
    handleLoadLogs();
  }, [page]);

  const handleLoadLogs = async () => {
    const res = await api.service('logs').find({
      query: {
        $sort: {
          date: -1
        },
        $skip: (page - 1) * 20,
        $limit: 20,
      }
    });

    setLogs({...res})
    setLoading(false)
  };
  
  const handleChangePage = (value) => {
    setPage(value)
  }

  return (
    <LogsView
      {...props}
      logs={logs}
      page={page}
      pageCount={pageCount}
      loading={loading}
      onChangePage={handleChangePage}
    />
  );
}
