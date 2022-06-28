import React, { useEffect } from 'react';

import {useDispatch} from 'react-redux';

import {getCounty} from '@store/commonReducers/commonReducer.thunk';

const ContainerRootView = ({children}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCounty())
  }, [])

  return (
    children
  );
}

export default ContainerRootView;
