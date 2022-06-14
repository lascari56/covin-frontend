import React, {useState, useEffect, useMemo} from 'react';

import {api} from '../../utils/api.util';

import LotsView from './lots.view';

import {useFormik} from 'formik';

import {animateScroll} from 'react-scroll';

const sortOptions = {
  auction_date: {
    key: "auction_date_api",
    value: 1
  },
  date_adding_new: {
    key: "createdAt",
    value: 1
  },
  date_adding_old: {
    key: "createdAt",
    value: -1
  }
};

export default function СontactsContainer({navigation, ...props}) {
  const [lots, setLots] = useState(null);
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);

  const didMount = React.useRef(false);

  const formikMeta = useFormik({
    initialValues: {
      search: '',
      speed: "miles",
      time: "+02:00",
      sort: "auction_date"
    },
    onSubmit: () => {
      
    },
  });

  useEffect(() => {
    handleLoadLots()
  }, []);

  useEffect(() => {
    // if (!didMount.current) {
    //   didMount.current = true;

    //   return;
    // }
    if (didMount.current) {
      handleGetLots();
    }

    
  }, [filters, page, formikMeta?.values?.sort]);

  // useEffect(() => {
  //   if (didMount.current) {
  //     animateScroll.scrollToTop()
  //   }
  // }, [lots?.data])

  const pageCount = useMemo(() => {
    return Math.ceil(lots?.total / lots?.limit);
  }, [lots?.total, lots?.limit]);

  const hnadleHangePage = async (value) => {
    setPage(value);

    // animateScroll.scrollToTop()
  };

  const handleFilter = async (value) => {
    setPage(0);
    setFilters(value);

    // animateScroll.scrollToTop()
  };

  const handleGetLots = async () => {
    if (loading) return;
  
    setLoading(true)

    const res = await api.service('cars').find({
      query: {
        $skip: page * 10,
        $sort: {
          [sortOptions[formikMeta?.values?.sort].key]: sortOptions[formikMeta?.values?.sort].value
        },
        ...filters,
      }
    });

    setLots({...lots, ...res})
    setLoading(false)
  };

  const handleLoadLots = async () => {
    const res = await api.service('cars').find({
      query: {
        full: true,
        $sort: {
          [sortOptions[formikMeta?.values?.sort].key]: sortOptions[formikMeta?.values?.sort].value
        },
        // title: { $search: 's' },
      }
    });

    setLots({...res})
    setLoading(false)
    didMount.current = true;
  };
  

  return (
    <LotsView
      {...props}
      lots={lots}
      page={page}
      pageCount={pageCount}
      loading={loading}
      formikMeta={formikMeta}
      onFilter={handleFilter}
      onChangePage={hnadleHangePage}
    />
  );
}
