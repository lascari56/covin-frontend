import {useState, useEffect, useLayoutEffect, useMemo, useRef} from 'react';

import {api} from '@utils/api.util';

import {useFormik} from 'formik';
import { toast } from 'react-toastify';

import {useSelector, useDispatch} from 'react-redux';

import {selectUnits} from '@store/commonReducers/commonReducer.selector';
import {saveUnits} from '@store/commonReducers/commonReducer.slice';

import {animateScroll} from 'react-scroll';

import {find, findIndex} from "lodash"

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
  {label: "Notification lots", value: "notifications"},
  {label: "Bookmark lots", value: "bookmarks"},
  {label: "Commented lots", value: "comments"},
  {label: "Hide lots", value: "hidden"},
  {label: "Purchased reports", value: "purchased_reports"},
]

export const useLots = ({isInitialLoad = false, initialSort = "auction_date", initialShow = "all", showOptions = baseShowOptions } = {}) => {
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
      show: initialShow,
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

  useEffect(() => {
    if (!didMount.current && isInitialLoad) {
      // handleLoadLots();
      handleGetLots();

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
    // if (loading) return;

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
    } else if (formikMeta?.values?.show !== 'all' && formikMeta?.values?.show !== 'notifications' && formikMeta?.values?.show !== 'purchased_reports') {
      query.filter = formikMeta?.values?.show;

      console.log("query.filter", query.filter);
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

    // if (!isInitialLoad) {
    requestAnimationFrame(() => {
      setMeta({total: res?.total, limit: res?.limit, filters: res?.filters})
    })
    // }
    
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

  const updateLot = ({id, data}) => {
    const index = findIndex(lots, ["_id", id])

    const _lots = [...lots]

    const item = {...lots[index], ...data}

    _lots[index] = item

    setLots(_lots)
  }

  const removeLot = ({id}) => {
    const index = findIndex(lots, ["_id", id])

    const _lots = [...lots]

    _lots?.splice(index, 1)
   
    setLots(_lots)
  }

  const handleSubmitCommentary = ({id, form}) => {
    const notificationId = toast.loading("Please wait...")
    setLoading(true)

    api.service("car-comments").create({message: form, car: id}).then((res) => {
      toast.update(notificationId, { 
        render: "Successfully added", 
        type: "success", 
        isLoading: false, 
        autoClose: 500, 
      })

      updateLot({id, data: {comment: res}})

      setLoading(false)
    }).catch((e) => {
      console.log("commentaryError", e.code);
      let message = "Something went wrong, please try again!";

      setLoading(false)

      toast.update(notificationId, { render: message, type: "error", isLoading: false, autoClose: 2000 })
    })
  }

  const handleSubmitHidden = ({id, itemId}) => {
    const notificationId = toast.loading("Please wait...")
    setLoading(true)

    api.service("car-hidden")[itemId ? "remove" : 'create'](itemId ? itemId : {car: id}).then((res) => {
      toast.update(notificationId, { 
        render: itemId ? "Successfully removed" : "Successfully added", 
        type: "success", 
        isLoading: false, 
        autoClose: 500, 
      })

      if (itemId) {
        updateLot({id, data: {hidden: null}})
      } else {
        removeLot({id})
      }

      setLoading(false)
    }).catch((e) => {
      console.log("commentaryError", e.code);
      let message = "Something went wrong, please try again!";

      setLoading(false)

      toast.update(notificationId, { render: message, type: "error", isLoading: false, autoClose: 2000 })
    })
  }

  const handleSubmitBookmarks = ({id, itemId}) => {
    const notificationId = toast.loading("Please wait...")
    setLoading(true)

    api.service("car-bookmarks")[itemId ? "remove" : 'create'](itemId ? itemId : {car: id}).then((res) => {
      toast.update(notificationId, { 
        render: itemId ? "Successfully removed" : "Successfully added", 
        type: "success", 
        isLoading: false, 
        autoClose: 500, 
      })

      if (itemId) {
        updateLot({id, data: {bookmark: null}})
      } else {
        updateLot({id, data: {bookmark: res}})
      }

      setLoading(false)
    }).catch((e) => {
      console.log("commentaryError", e.code);
      let message = "Something went wrong, please try again!";

      setLoading(false)

      toast.update(notificationId, { render: message, type: "error", isLoading: false, autoClose: 2000 })
    })
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
    onSubmitCommentary: handleSubmitCommentary,
    onSubmitHidden: handleSubmitHidden,
    onSubmitBookmarks: handleSubmitBookmarks,
    onChangeFulLotId: setFulLotId
  }
}