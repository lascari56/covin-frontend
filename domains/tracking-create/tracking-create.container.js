import React, { useState, useEffect, useMemo } from 'react';

import TrackingCreateView from './tracking-create.view'

import {useFiltersCreate} from "@hooks/useFiltersCreate"

const meta = [
  {
    title: "Notification settings",
    description: "Подзаголовок, который кратко описывает функционал данной страницы"
  },
  {
    title: "Create Filter",
    description: "Подзаголовок, который кратко описывает функционал данной страницы"
  },
  {
    title: "Name of Filter",
    description: "Подзаголовок, который кратко описывает функционал данной страницы"
  }
]

const TrackingCreateContainer = ({navigation, ...props}) => {
  const filtersCreate = useFiltersCreate({ initialActiveStep: 2, onSubmit: (values) => {
    alert(JSON.stringify(values))
  }})

  const metaInfo = useMemo(() => {
    return meta[filtersCreate.activeStep - 1]
  }, [filtersCreate.activeStep])

  return (
    <TrackingCreateView 
      {...props}
      filtersCreate={filtersCreate}
      metaInfo={metaInfo}
    />
  );
}

export default TrackingCreateContainer;
