import React, { useState, useEffect, useMemo } from 'react'

import LotsFiltersView from "./lots-filters.view"

import {useFilters} from "@hooks/useFilters"

export default function LotsFiltersContainer({data, onSubmit, ...props}) {
  const filters = useFilters({ data, onSubmit, units: props.units })
  
  return (
    <LotsFiltersView
      {...props}
      {...filters}
    />
  )
}
