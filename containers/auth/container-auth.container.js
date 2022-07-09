import React, { useEffect, useMemo } from 'react';

import { useRouter } from 'next/router';

import {useSelector, useDispatch} from 'react-redux';

import {selectUser} from '@store/authReducers/authReducer.selector';

const adminRoutes = ["/admin/logs"]

const protectedRoutes = [
  "/cabinet/carfax",
  "/cabinet/autocheck",
  "/cabinet/sticker",
  "/cabinet/lots",
  "/cabinet/tracking",
  "/cabinet/tracking/create",
  "/cabinet/templates",
  "/cabinet/templates/create",
  "/cabinet/payments",
  "/cabinet/settings",
  "/cabinet/news",
  "/cabinet/support",
]

const ContainerAuthContainer = ({ children }) => {
  const router = useRouter();

  const user = useSelector(selectUser);

  const pathIsProtected = useMemo(() => {
    return protectedRoutes?.indexOf(router.pathname) !== -1;
  }, [router.pathname])

  const pathIsAdmin = useMemo(() => {
    return adminRoutes?.indexOf(router.pathname) !== -1;
  }, [router.pathname])

  const isNeedRedirect = useMemo(() => {
    if (((pathIsAdmin || pathIsProtected) && !user) || pathIsAdmin && user?.role !== "admin" || !pathIsAdmin && !pathIsProtected && user) {
      return true
    }

    return false
  }, [])

  useEffect(() => {
    if ((pathIsAdmin || pathIsProtected) && !user) {
      router.push('/');
    } else if (pathIsAdmin && user?.role !== "admin") {
      router.push('/cabinet/lots');
    } else if (!pathIsAdmin && !pathIsProtected && user) {
      router.push('/cabinet/lots');
    }
  }, [pathIsProtected, user])

  if (isNeedRedirect) {
    return;
  }
  
  return (
    children
  );
}

export default ContainerAuthContainer;
