import React, {useState, useEffect, useMemo} from 'react';
import {useDispatch} from 'react-redux';

// import {selectLots} from '@store/lotReducers/lotReducer.selector';
import {
  getLots,
} from '@store/lotReducers/lotReducer.thunk';

import {api} from '../../utils/api.util';

import LotsView from './lots.view';

export default function СontactsContainer({navigation, ...props}) {
  // const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [lots, setLots] = useState(props.lots);

  // const lots = useSelector(selectLots);

  const pageCount = useMemo(() => {
    return Math.ceil(lots.total / lots.limit);
  }, [lots]);

  useEffect(() => {
    handleGetLots();
  }, [page]);

  const handleGetLots = async () => {
    console.log("page", page);
  
    const res = await api.service('cars').find({
      query: {
        $skip: page * 10,
        read: false
      }
    });

    setLots({...lots, ...res})

    console.log("res", res);
  };

  return (
    <LotsView
      {...props}
      lots={lots}
      page={page}
      pageCount={pageCount}
      onChangePage={setPage}
    />
  );
}
