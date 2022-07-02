import React, { useMemo, useEffect } from 'react'

import CabinetView from "./cabinet.view"

import {useSelector, useDispatch} from 'react-redux';

import { toast } from 'react-toastify';

import {api} from '@utils/api.util';

import {logout} from '@store/authReducers/authReducer.slice';

import {selectUser} from '@store/authReducers/authReducer.selector';

export default function CabinetContainer({...props}) {
  const router = useRouter()
  
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const isFull = useMemo(() => {
    if (router.asPath === "/cabinet/lots" || router.asPath === "/cabinet/tracking") {
      return false
    }

    return true
  }, [router.asPath])

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user])

  const handleLogout = async () => {
    await api.logout();
    await dispatch(logout());

    // router.push('/')
  }

  return (
    <CabinetView {...props} isFull={isFull} onLogout={handleLogout} />
  )
}
