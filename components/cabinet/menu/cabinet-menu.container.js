import React from 'react'

import CabinetMenuView from "./cabinet-menu.view"

import { useRouter } from 'next/router'

export default function –°abinet–¨enuContainer({...props}) {
  const router = useRouter();

  return (
    <CabinetMenuView {...props} activeRoute={router.asPath} />
  )
}
