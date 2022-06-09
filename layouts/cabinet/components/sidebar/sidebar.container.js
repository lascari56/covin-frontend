import React, { useMemo } from 'react'

import SidebarView from "./sidebar.view"

import { useRouter } from 'next/router'

export default function TopLineMenuContainer({...props}) {
  const router = useRouter();

  // const activeRoute = useMemo(() => {
  //   return router.asPath
  //   // return router.asPath.split("/").slice(0, 2).join('/');
  // }, [router.asPath])

  return (
    <SidebarView {...props} activeRoute={router.asPath} />
  )
}
