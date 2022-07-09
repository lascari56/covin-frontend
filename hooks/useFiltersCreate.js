import {useMemo, useState, useEffect} from 'react';

import {useFormik} from 'formik';

import {useSelector, useDispatch} from 'react-redux';

import {selectUnits} from '@store/commonReducers/commonReducer.selector';

import {api} from '@utils/api.util';

export const useFiltersCreate = ({ initialActiveStep, onSubmit }) => {
  const [activeStep, setActiveStep] = useState(initialActiveStep || 1);
  const [filters, setFilters] = useState({ data: null, loading: true })

  const formik = useFormik({
    initialValues: {
      filters: null,
      name: null
    },
  });

  const units = useSelector(selectUnits);

  useEffect(() => {
    handleLoadFilters()
  }, [])

  const handleLoadFilters = async () => {
    const res = await api.service('car-filters').find({});

    setFilters({
      data: res?.length ? res[0] : null,
      loading: false
    })
  };

  const handlerBack = () => {
    setActiveStep(activeStep - 1)
  }

  const handlerSaveFilters = (value) => {
    formik.setFieldValue('filters', value)

    setActiveStep(activeStep + 1)
  }

  const handlerSaveName = (value) => {
    formik.setFieldValue('name', value)

    onSubmit({
      filters: formik.values.filters,
      name: value
    })
  }

  return {
    activeStep,
    filters,
    units,
    onBack: handlerBack,
    onSaveFilters: handlerSaveFilters,
    onSaveName: handlerSaveName,
  }
}