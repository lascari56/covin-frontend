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
  },
  // alphabet: {
  //   key: "make",
  //   value: 1
  // },
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

    console.log("filters", filters);

    let query = {};

    for (let filter in filters) {
      if (filter === 'damage' && filters?.damage.length) {
        query.$or = [
          {
            damage_pr: {
              $in: filters?.damage,
            }
          },
          {
            damage_sec: {
              $in: filters?.damage,
            }
          }
        ]
      } else if (filters[filter]) {
        query[filter] = filters[filter]
      }
    }

    if (formikMeta?.values?.search) query.title = { $search: formikMeta?.values?.search };

    // if (filters?.)

    // return;

    const res = await api.service('cars').find({
      query: {
        $sort: {
          [sortOptions[formikMeta?.values?.sort].key]: sortOptions[formikMeta?.values?.sort].value
        },
        $skip: page * 10,
        $limit: 10,
        // title: { $search: formikMeta?.values?.search },
        // $or: [
        //   {
        //     auction_date: {
        //       $lte: moment().subtract(3, 'hours').unix(),
        //     }
        //   },
        //   {
        //     lot_id: {
        //       $in: selledLotIds,
        //     }
        //   }
        // ],
        ...query,
      }
    });

    setLots({...lots, ...res})
    setLoading(false)

    requestAnimationFrame(() => {
      animateScroll.scrollToTop()
    })
  };

  const handleLoadLots = async () => {
    // const res = await api.service('cars').find({
    //   query: {
    //     full: true,
    //     $sort: {
    //       [sortOptions[formikMeta?.values?.sort].key]: sortOptions[formikMeta?.values?.sort].value
    //     },
    //   }
    // });

    // setLots({...res})
    // setLoading(false)
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
