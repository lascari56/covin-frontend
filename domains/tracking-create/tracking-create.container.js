import React, { useState, useEffect, useMemo } from 'react';

import TrackingCreateView from './tracking-create.view'

import {useSelector, useDispatch} from 'react-redux';

import {selectUnits} from '@store/commonReducers/commonReducer.selector';

import {api} from '@utils/api.util';

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

const TrackingCreateContainer = ({...props}) => {
  const [activeStep, setActiveStep] = useState(2);
  const [filters, setFilters] = useState({ data: null, loading: true })

  const units = useSelector(selectUnits);

  const metaInfo = useMemo(() => {
    return meta[activeStep - 1]
  }, [activeStep])

  useEffect(() => {
    handleLoadFilters()
  }, [])

  const handleLoadFilters = async () => {
    const res = await api.service('car-filters').find({});

    console.log("res", JSON.stringify(res))

    setFilters({
      data: res?.length ? res[0] : null,
      loading: false
    })
  };

  const handlerBack = () => {
    setActiveStep(activeStep - 1)
  }

  const handlerNext = () => {
    setActiveStep(activeStep + 1)
  }

  return (
    <TrackingCreateView 
      {...props}
      filters={filters}
      activeStep={activeStep}
      units={units}
      metaInfo={metaInfo}
      onBack={handlerBack}
      onNext={handlerNext}
    />
  );
}

export default TrackingCreateContainer;
