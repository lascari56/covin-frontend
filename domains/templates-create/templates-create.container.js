import React, { useState, useMemo } from 'react';

import TemplatesCreateView from './templates-create.view'

import {useFiltersCreate} from "@hooks/useFiltersCreate"

import { useRouter } from 'next/router'

const meta = [
  {
    title: "Create Filter",
    description: "Подзаголовок, который кратко описывает функционал данной страницы"
  },
  {
    title: "Name of Filter",
    description: "Подзаголовок, который кратко описывает функционал данной страницы"
  }
]

const TrackingCreateContainer = ({...props}) => {
  const router = useRouter()

  const filtersCreate = useFiltersCreate({ entry: "templates", onSuccess: () => {
    router.push('/cabinet/templates')
  }})

  const metaInfo = useMemo(() => {
    return meta[filtersCreate.activeStep - 1]
  }, [filtersCreate.activeStep])

  return (
    <TemplatesCreateView 
      {...props}
      filtersCreate={filtersCreate}
      metaInfo={metaInfo}
    />
  );
}

export default TrackingCreateContainer;
