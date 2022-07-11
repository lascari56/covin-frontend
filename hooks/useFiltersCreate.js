import {useMemo, useState, useEffect} from 'react';

import { toast } from 'react-toastify';

import {useFormik} from 'formik';

import {useSelector} from 'react-redux';

import {selectUnits} from '@store/commonReducers/commonReducer.selector';

import {api} from '@utils/api.util';

export const useFiltersCreate = ({ initialActiveStep, entry, onSuccess }) => {
  const [activeStep, setActiveStep] = useState(initialActiveStep || 1);
  const [filters, setFilters] = useState({ data: null, loading: true })
  const [loading, setLoading] = useState(false)

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

  const onSubmit = async (values) => {
    const notificationId = toast.loading("Please wait...")
    setLoading(true)

    api.service(entry).create(values).then(async (res) => {
      toast.update(notificationId, { 
        render: "Successfully added", 
        type: "success", 
        isLoading: false, 
        autoClose: 500, 
        onClose: () => {
          onSuccess()

          setLoading(false)
        }})
    }).catch((e) => {
      console.log("authError", e.code);
      let message = "Something went wrong, please try again!";

      setLoading(false)

      toast.update(notificationId, { render: message, type: "error", isLoading: false, autoClose: 2000 })
    })
  }

  return {
    activeStep,
    filters,
    units,
    loading,
    onBack: handlerBack,
    onSaveFilters: handlerSaveFilters,
    onSaveName: handlerSaveName,
  }
}