import React, { useMemo } from 'react'

import CabinetView from "./cabinet.view"

import { useRouter } from 'next/router'

export default function CabinetContainer({...props}) {
  const router = useRouter()

  const isFull = useMemo(() => {
    if (router.asPath === "/cabinet/lots") {
      // || router.asPath === "/cabinet/lots"
      return false
    }

    return true
  }, [router.asPath])

  return (
    <CabinetView {...props} isFull={isFull} />
  )
}
