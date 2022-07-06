import React, { useMemo, useEffect } from 'react'

import CabinetView from "./cabinet.view"

import {useSelector, useDispatch} from 'react-redux';
import { useRouter } from 'next/router'

import { toast } from 'react-toastify';

import {api} from '@utils/api.util';

import {logout} from '@store/authReducers/authReducer.slice';

import {selectUser} from '@store/authReducers/authReducer.selector';

export default function CabinetContainer({...props}) {
  const router = useRouter()
  
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const isFull = useMemo(() => {
    if (router.pathname === "/cabinet/lots" || router.pathname === "/cabinet/tracking") {
      return false
    }

    return true
  }, [router.pathname])

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/')
  //   }
  // }, [user, router.pathname])

  const handleLogout = async () => {
    await api.logout();
    
    dispatch(logout());
  }

  return (
    <CabinetView {...props} isFull={isFull} user={user} onLogout={handleLogout} />
  )
}
