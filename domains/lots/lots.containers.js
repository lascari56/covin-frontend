import React, {useState, useEffect, useLayoutEffect, useMemo} from 'react';

import {api} from '../../utils/api.util';

import LotsView from './lots.view';

import {useFormik} from 'formik';

import {useSelector, useDispatch} from 'react-redux';

import {selectUnits} from '@store/commonReducers/commonReducer.selector';
import {saveUnits} from '@store/commonReducers/commonReducer.slice';

import {animateScroll} from 'react-scroll';

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
  // alphabet: {
  //   key: "make",
  //   value: 1
  // },
};

export default function СontactsContainer({navigation, ...props}) {
  const dispatch = useDispatch();

  const [lots, setLots] = useState(null);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);
  const [isMore, setIsMore] = useState(false);

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

  useLayoutEffect(() => {
    if (!didMount.current) {
      handleLoadLots();

      didMount.current = true;
    }
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
    console.log("value", value);
    setPage(value);
  };

  const handleFilter = async (value) => {
    setPage(1);
    setFilters(value);
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

    const res = await api.service('cars').find({
      query: {
        
        $sort: {
          auction_date_known: 1,
          [sortOptions[formikMeta?.values?.sort].key]: sortOptions[formikMeta?.values?.sort].value
        },
        ...query,
        $skip: (currentPage - 1) * 20,
        // $limit: 20,
      }
    });

    // console.log(page)

    // alert(res.data?.length)

    if (isMore) {
      setLots({...lots, data: [...lots?.data, ...res?.data]})
      setIsMore(false)
    } else {
      setLots({...lots, data: [...res.data]})

      // requestAnimationFrame(() => {
      //   animateScroll.scrollToTop()
      // })
    }
    
    setLoading(false)

    
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

    setLots({...res, data: [...res?.data]})
    
    setLoading(false)
    // didMount.current = true;
  };
  
  const handlePageMore = () => {
    setPage(page + 1)
    setIsMore(true)
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
