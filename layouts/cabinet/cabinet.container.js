import React, { useMemo } from 'react'

import CabinetView from "./cabinet.view"

import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
// import {useDispatch, useSelector} from 'react-redux';

import {api} from '@utils/api.util';

import {logout} from '@store/authReducers/authReducer.slice';

export default function CabinetContainer({...props}) {
  const router = useRouter()
  // const dispatch = useDispatch();

  const isFull = useMemo(() => {
    if (router.asPath === "/cabinet/lots" || router.asPath === "/cabinet/tracking") {
      return false
    }

    return true
  }, [router.asPath])

  const handleLogout = async () => {
    await api.logout();
    // await dispatch(logout());

    router.push('/')

    // toast.success("Logout success!");
  }

  return (
    <CabinetView {...props} isFull={isFull} onLogout={handleLogout} />
  )
}
