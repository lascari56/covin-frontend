import React, {useState, useEffect, useMemo} from 'react';

import {useSelector} from 'react-redux';
import {selectUser} from '@store/authReducers/authReducer.selector';

import {api} from '../../utils/api.util';

import CarfaxView from './carfax.view';

export default function CarfaxContainer({navigation, ...props}) {
  const user = useSelector(selectUser);

  const [reports, setReports] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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
        source_group: props.type,
        $sort: {
          date: -1
        },
        $skip: (page - 1) * 20,
        $limit: 20,
        // vin: {
        //   $search: search,
        // }
      }
    });

    // console.log("res", res);

    setReports({...res})
    setLoading(false)
  };
  
  const handleChangePage = (value) => {
    setPage(value)
  }

  return (
    <CarfaxView
      {...props}
      user={user}
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
