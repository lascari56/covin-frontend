import React, { useState, useMemo } from 'react';

import TemplatesCreateView from './templates-create.view'

import {useFiltersCreate} from "@hooks/useFiltersCreate"

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
  const [loading, setLoading] = useState(false)

  const filtersCreate = useFiltersCreate({ onSubmit: (values) => {
    alert(JSON.stringify(values))
  }})

  const metaInfo = useMemo(() => {
    return meta[filtersCreate.activeStep - 1]
  }, [filtersCreate.activeStep])

  return (
    <TemplatesCreateView 
      {...props}
      filtersCreate={filtersCreate}
      metaInfo={metaInfo}
      loading={loading}
    />
  );
}

export default TrackingCreateContainer;
