import React, {useState, useEffect, useMemo} from 'react';

import {api} from '../../utils/api.util';

import LotsView from './lots.view';

import {useFormik} from 'formik';

import {useSelector, useDispatch} from 'react-redux';

import {selectUnits} from '@store/commonReducers/commonReducer.selector';
import {saveUnits} from '@store/commonReducers/commonReducer.slice';

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
  const dispatch = useDispatch();

  const [lots, setLots] = useState(null);
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);

  const didMount = React.useRef(false);

  const units = useSelector(selectUnits);

  const formikMeta = useFormik({
    initialValues: {
      search: '',
      speed: units.speed,
      sort: "auction_date"
    },
    onSubmit: () => {
      
    },
  });

  useEffect(() => {
    handleLoadLots()
  }, []);

  useEffect(() => {
    if (didMount.current) {
      handleGetLots();
    }

    
  }, [filters, page, formikMeta?.values?.sort, formikMeta?.values?.search]);

  useEffect(() => {
    if (formikMeta.values.speed !== units.speed) {
      dispatch(saveUnits({ key: "speed", value: formikMeta.values.speed }))
    }
  }, [formikMeta.values.speed])

  const pageCount = useMemo(() => {
    return Math.ceil(lots?.total / lots?.limit);
  }, [lots?.total, lots?.limit]);

  const hnadleHangePage = async (value) => {
    setPage(value);
  };

  const handleFilter = async (value) => {
    setPage(0);
    setFilters(value);
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
        title: { $search: formikMeta?.values?.search },
        ...filters,
      }
    });

    setLots({...lots, ...res})
    setLoading(false)

    requestAnimationFrame(() => {
      animateScroll.scrollToTop()
    })
  };

  const handleLoadLots = async () => {
    const res = await api.service('cars').find({
      query: {
        full: true,
        $sort: {
          [sortOptions[formikMeta?.values?.sort].key]: sortOptions[formikMeta?.values?.sort].value
        },
      }
    });

    setLots({...res})
    setLoading(false)
    didMount.current = true;
  };
  
  const handlePageMore = () => {
    setPage(page + 1)
  }

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
      onPageMore={handlePageMore}
    />
  );
}
