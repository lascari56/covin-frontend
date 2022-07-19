import React, {useState, useEffect, useMemo} from 'react';
import { toast } from 'react-toastify';

import {api} from '@utils/api.util';

import PaymentsView from './payments.view';

export default function PaymentsContainer({navigation, ...props}) {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const pageCount = useMemo(() => {
    return Math.ceil(data?.total / data?.limit);
  }, [data?.total, data?.limit]);

  useEffect(() => {
    handleLoadData();
  }, [page]);

  const handleLoadData = async () => {
    console.log("page", page);
    setLoading(true)

    const res = await api.service('billing').find({
      query: {
        $sort: {
          date: -1
        },
        $skip: (page - 1) * 20,
        $limit: 20,
      }
    });

    setData({...res})
    setLoading(false)
  };
  
  const handleChangePage = (value) => {
    setPage(value)
  }

  return (
    <PaymentsView
      {...props}
      data={data}
      page={page}
      pageCount={pageCount}
      loading={loading}
      onChangePage={handleChangePage}
    />
  );
}
