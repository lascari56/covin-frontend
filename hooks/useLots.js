import {useState, useEffect, useLayoutEffect, useMemo, useRef} from 'react';

import {api} from '@utils/api.util';

import {useFormik} from 'formik';

import {useSelector, useDispatch} from 'react-redux';

import {selectUnits} from '@store/commonReducers/commonReducer.selector';
import {saveUnits} from '@store/commonReducers/commonReducer.slice';

import {animateScroll} from 'react-scroll';

import {find} from "lodash"

const sortOptions = {
  auction_date: {
    key: "auction_date",
    value: 1
  },
  date_adding_new: {
    key: "createdAt",
    value: 1
  },
  date_adding_old: {
    key: "createdAt",
    value: -1
  },
};

const baseShowOptions = [
  {label: "All", value: "all"},
  {label: "Buy Now", value: "buy_now"},
  {label: "Notification lots", value: "notification_lots"},
  {label: "Commented lots", value: "commented_lots"},
  {label: "Hide lots", value: "hide_lots"},
  {label: "Purchased reports", value: "purchased_reports"},
]

export const useLots = ({isInitialLoad = false, initialSort = "auction_date", showOptions = baseShowOptions } = {}) => {
  const dispatch = useDispatch();

  const [lots, setLots] = useState(null);
  const [meta, setMeta] = useState(null);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(!!isInitialLoad);
  const [isMore, setIsMore] = useState(false);
  const [fulLotId, setFulLotId] = useState(null)

  const didMount = useRef(false);

  const units = useSelector(selectUnits);

  const formikMeta = useFormik({
    initialValues: {
      show: "all",
      search: '',
      speed: units.speed,
      sort: initialSort
    }
  });

  const fullItemSelected = useMemo(() => {
    if (!fulLotId) return null;

    return find(lots, { _id: fulLotId })
  }, [lots, fulLotId])

  useEffect(() => {
    if (didMount.current) {
      handleGetLots();
    }
  }, [filters, page, formikMeta?.values?.sort, formikMeta?.values?.search, formikMeta?.values?.show]);

  useLayoutEffect(() => {
    if (!didMount.current && isInitialLoad) {
      handleLoadLots();

      didMount.current = true;
    }
  }, [isInitialLoad]);

  useEffect(() => {
    if (formikMeta.values.speed !== units.speed) {
      dispatch(saveUnits({ key: "speed", value: formikMeta.values.speed }))
    }
  }, [formikMeta.values.speed])

  const pageCount = useMemo(() => {
    return Math.ceil(meta?.total / meta?.limit);
  }, [meta?.total, meta?.limit]);

  const hnadleHangePage = async (value) => {
    setPage(value);
  };

  const handleFilter = async (value) => {
    setPage(1);
    setFilters(value);

    if (!didMount.current) {
      didMount.current = true;
    }
  };

  const handleGetLots = async () => {
    if (loading) return;

    let currentPage = page; 
  
    setLoading(true)

    let query = {...filters};

    if (!!formikMeta?.values?.search) {
      currentPage = 1;
      setPage(currentPage);

      if (!query.$or) query.$or = [];

      query.$or = [
        {
          title: {
            $search: formikMeta?.values?.search,
          }
        },
        {
          vin: {
            $search: formikMeta?.values?.search,
          }
        },
        {
          lot_id: {
            $search: formikMeta?.values?.search,
          }
        }
      ];
    }

    if (formikMeta?.values?.show === 'buy_now') {
      query.price_new = { $gt: 0 }
    }

    const res = await api.service('cars').find({
      query: {
        $sort: {
          auction_date_known: -1,
          [sortOptions[formikMeta?.values?.sort].key]: sortOptions[formikMeta?.values?.sort].value
        },
        ...query,
        $skip: (currentPage - 1) * 20,
        $limit: 20,
      }
    });

    if (isMore) {
      setLots([...lots, ...res?.data])
      setIsMore(false)
    } else {
      setLots(res?.data)

      requestAnimationFrame(() => {
        animateScroll.scrollToTop()
      })
    }

    if (!isInitialLoad) {
      requestAnimationFrame(() => {
        setMeta({total: res?.total, limit: res?.limit, filters: res?.filters})
      })
    }
    
    setLoading(false)
  };

  const handleLoadLots = async () => {
    const res = await api.service('cars').find({
      query: {
        full: true,
        $sort: {
          auction_date_known: -1,
          [sortOptions[formikMeta?.values?.sort].key]: sortOptions[formikMeta?.values?.sort].value
        },
        $limit: 20,
      }
    });

    setLots(res?.data)
    
    requestAnimationFrame(() => {
      setMeta({total: res?.total, limit: res?.limit, filters: res?.filters})
    })

    setLoading(false)
  };
  
  const handlePageMore = () => {
    setPage(page + 1)
    setIsMore(true)
  }

  return {
    data: lots,
    meta,
    page,
    pageCount,
    loading,
    formikMeta,
    units,
    fullItemSelected,
    showOptions,
    onFilter: handleFilter,
    onChangePage: hnadleHangePage,
    onPageMore: handlePageMore,
    onChangeFulLotId: setFulLotId
  }
}