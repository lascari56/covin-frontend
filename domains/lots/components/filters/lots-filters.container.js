import React, { useMemo } from 'react'

import LotsFiltersView from "./lots-filters.view"

import {useFormik} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({});

const convertToCkeckbox = (data) => {
  return Object?.keys(data)?.map(key => ({ value: key, count: data[key] }))
}

export default function LotsFiltersContainer({data, onSubmit, ...props}) {
  const formik = useFormik({
    initialValues: {
      search: '',
      make: [],
      model: [],
      series: [],
      year: [],
      ordometr: [],
      loss: [],
      damage: [],
      drive: [],
      status: [],
      keys: [],
      transmission: [],
      engine: [],
      fuel: [],
      cost_repair: [],
      location: [],
      document: []
    },
    validationSchema,
    onSubmit,
  });

  const filters = useMemo(() => {
    const res = {};

    if (data) {
      res.make = convertToCkeckbox(data?.make)
      res.model = convertToCkeckbox(data?.model)
      res.series = convertToCkeckbox(data?.series)

      res.loss = convertToCkeckbox(data?.loss)
      
      res.status = convertToCkeckbox(data?.status)
      res.keys = convertToCkeckbox(data?.keys)
      res.drive = convertToCkeckbox(data?.drive)

      res.transmission = convertToCkeckbox(data?.transmission)
      res.fuel = convertToCkeckbox(data?.fuel)
      res.engine = convertToCkeckbox(data?.engine)
      
      res.location = convertToCkeckbox(data?.location)
      res.document = convertToCkeckbox(data?.document)
    }

    return res
  }, [data])

  return (
    <LotsFiltersView {...props} formik={formik} filters={filters} />
  )
}
