import React, { useMemo } from 'react'

import LotsFiltersView from "./lots-filters.view"

import {useFormik} from 'formik';

import {find} from "lodash"

const convertToCkeckbox = (data, keys) => {
  return Object?.keys(data)?.map(key => {
    let label = keys ? keys[key] : key;

    return { value: key, label, count: data[key].count }
  })
}

export default function LotsFiltersContainer({data, onFilter, ...props}) {
  const formik = useFormik({
    initialValues: {
      search: '',
      make: [],
      model: [],
      series: [],
      year: [],
      odometr: [],
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
      document: [],
      site: [],
    },
    onSubmit: onFilter,
  });

  const filters = useMemo(() => {
    const res = {};

    // console.log(JSON.stringify(data))

    if (data) {
      res.make = convertToCkeckbox(data?.make)
      // res.model = convertToCkeckbox(data?.model)
      // res.series = convertToCkeckbox(data?.series)

      res.loss = convertToCkeckbox(data?.loss)
      
      res.status = convertToCkeckbox(data?.status)
      res.keys = convertToCkeckbox(data?.keys)
      res.drive = convertToCkeckbox(data?.drive)

      res.transmission = convertToCkeckbox(data?.transmission)
      res.fuel = convertToCkeckbox(data?.fuel)
      res.engine = convertToCkeckbox(data?.engine)
      
      res.location = convertToCkeckbox(data?.location)
      res.document = convertToCkeckbox(data?.document)
      res.site = convertToCkeckbox(data?.site, {"1": "Copart", "2": "IAAI"})
    }

    return res
  }, [data])

  const renderFilters = useMemo(() => {
    const _filters = {...filters}

    // if (formik.values.make.length) {
    //   _filters.model = filters.model?.filter(item => {
    //     const _item = data?.model[item.value];

    //     return formik.values.make?.indexOf(_item.make) !== -1
    //   })
    // }

    // if (formik.values.model.length) {
    //   _filters.series = filters.series?.filter(item => {
    //     const _item = data?.series[item.value];

    //     return formik.values.series?.indexOf(_item.model) !== -1
    //   })
    // }

    return _filters
  },)

  const handlerReset = () => {
    formik.resetForm()
    formik.submitForm()
  }

  return (
    <LotsFiltersView {...props} formik={formik} filters={renderFilters} onReset={handlerReset} />
  )
}
