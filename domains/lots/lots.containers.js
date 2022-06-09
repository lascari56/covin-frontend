import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {selectLots} from '@store/lotReducers/lotReducer.selector';
import {
  getLots,
} from '@store/lotReducers/lotReducer.thunk';

import LotsView from './lots.view';

export default function СontactsContainer({navigation, ...props}) {
  const dispatch = useDispatch();

  const lots = useSelector(selectLots);

  useEffect(() => {
    dispatch(getLots());
  }, []);

  return (
    <LotsView
      {...props}
      lots={lots}
    />
  );
}
