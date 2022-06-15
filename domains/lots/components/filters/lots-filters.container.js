import React, { useState, useEffect, useMemo } from 'react'

import LotsFiltersView from "./lots-filters.view"

import {useFormik} from 'formik';

const sortAlphabet = (a, b) => {
  if (a.value < b.value) { 
   return -1;
 } else if (a.value > b.value) {
   return 1;
 }

 return 0;
}

const convertToCkeckbox = ({data, keys, sort = true}) => {
  const res = Object?.keys(data)?.map(key => {
    let label = keys ? keys[key] : key;

    return { value: key, label, count: data[key].count }
  })

  if (sort) {
    return res.sort(sortAlphabet)
  }

  return res;
}

const convertToDamage = (damage_pr, damage_sec) => {
  const res = {};

  Object?.keys(damage_pr)?.forEach((key) => {
    res[key] = { value: key, label: key, count: damage_pr[key].count }
  })

  Object?.keys(damage_sec)?.forEach((key) => {
    if (res[key]) {
      res[key].count += damage_sec[key].count
    } else {
      res[key] = { value: key, label: key, count: damage_sec[key].count }
    }
  })

  return Object.values(res).sort(sortAlphabet)
}

export default function LotsFiltersContainer({data, onFilter, ...props}) {
  // const [filters, setFilters] = useState({})

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

  // const carFilters = useMemo(() => {
  //   const res = {}


  //   if (data?.series) {
  //     console.log(JSON.stringify(data.series))

  //     Object.keys(data.series).forEach((key) => {
  //       const item = data.series[key];


  //       if (res[item.make]) {

  //       }
  //     })
  //   }

    
  // }, [data])

  // useEffect(() => {
  //   if (formik.values.make?.length) {

  //   }
  // }, [formik.values.make?.length]);
  // const 

  const filters = useMemo(() => {
    const res = {};

    if (data) {

      // console.log(JSON.stringify(data))
      res.make = convertToCkeckbox({data: data?.make})
      // res.model = convertToCkeckbox(data?.model)
      // res.series = convertToCkeckbox(data?.series)

      res.loss = convertToCkeckbox({data: data?.loss})
      
      res.status = convertToCkeckbox({data: data?.status})
      res.keys = convertToCkeckbox({data: data?.keys})
      res.drive = convertToCkeckbox({data: data?.drive})

      res.damage = convertToDamage(data?.damage_pr, data?.damage_sec)

      res.transmission = convertToCkeckbox({data: data?.transmission})
      res.fuel = convertToCkeckbox({data: data?.fuel})
      res.engine = convertToCkeckbox({data: data?.engine})
      
      res.location = convertToCkeckbox({data: data?.location})
      res.document = convertToCkeckbox({data: data?.document})
      res.site = convertToCkeckbox({data: data?.site, keys: {"1": "Copart", "2": "IAAI"}})
    }

    return res
  }, [data])

  const modelOptions = useMemo(() => {
    const res = {};

    if (data?.model) {
      Object.keys(data?.model).forEach((key) => {
        res[key] = convertToCkeckbox({data: data?.model[key], sort: false})
      })
    }

    return res
  }, [data?.model])

  const modelFilters = useMemo(() => {
    const res = []

    if (formik.values.make?.length) {
      formik.values.make?.map(key => {
        res.push(...modelOptions[key])
      })
    }

    return res.sort(sortAlphabet)
  }, [modelOptions, formik.values.make?.length])

  const seriesOptions = useMemo(() => {
    const res = {};

    if (data?.series) {
      Object.keys(data?.series).forEach((key) => {
        res[key] = convertToCkeckbox({data: data?.series[key], sort: false})
      })
    }

    return res
  }, [data?.series])

  const seriesFilters = useMemo(() => {
    const res = []

    if (formik.values.model?.length && formik.values.make?.length) {
      const keys = Object.keys(seriesOptions);

      keys.forEach((key) => {
        const keyElements = key?.split("|");

        if (formik.values.make?.indexOf(keyElements[0]) !== -1 && formik.values.model?.indexOf(keyElements[1]) !== -1) {
          res.push(...seriesOptions[key])
        }
      })
    }

    return res.sort(sortAlphabet)
  }, [seriesOptions, formik.values.make?.length, formik.values.model?.length])

  const handlerReset = () => {
    formik.resetForm()
    formik.submitForm()
  }

  return (
    <LotsFiltersView
      {...props}
      formik={formik}
      filters={filters}
      modelFilters={modelFilters}
      seriesFilters={seriesFilters}
      onReset={handlerReset}
    />
  )
}
