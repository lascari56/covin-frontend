import React, {useState, useEffect, useMemo} from 'react';

import {api} from '../../utils/api.util';

import CarfaxView from './carfax.view';

export default function CarfaxContainer({navigation, ...props}) {
  const [reports, setReports] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  console.log("11111111page", page);

  const pageCount = useMemo(() => {
    return Math.ceil(reports?.total / reports?.limit);
  }, [reports?.total, reports?.limit]);

  useEffect(() => {
    handleLoadLogs();
  }, [page, search]);

  const handleLoadLogs = async () => {
    console.log("page", page);
    setLoading(true)

    const res = await api.service('report').find({
      query: {
        $sort: {
          date: -1
        },
        $skip: (page - 1) * 20,
        $limit: 20,
        vin: {
          $search: search,
        }
      }
    });

    console.log("res", res);

    setReports({...res})
    setLoading(false)
  };
  
  const handleChangePage = (value) => {
    setPage(value)
  }

  return (
    <CarfaxView
      {...props}
      reports={reports}
      page={page}
      pageCount={pageCount}
      loading={loading}
      onChangePage={handleChangePage}
      onChangeSearch={setSearch}
      onRefreshData={handleLoadLogs}
    />
  );
}
