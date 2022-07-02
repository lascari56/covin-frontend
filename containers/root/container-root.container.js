import React, { useEffect } from 'react';

import {useSelector, useDispatch} from 'react-redux';

// import {selectUser} from '@store/authReducers/authReducer.selector';

import {getCounty} from '@store/commonReducers/commonReducer.thunk';

// import { useRouter } from 'next/router'

const ContainerRootView = ({children}) => {
  // const router = useRouter()

  const dispatch = useDispatch();

  // const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getCounty())
  }, [])

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/')
  //   }
  // }, [user])

  return (
    children
  );
}

export default ContainerRootView;
