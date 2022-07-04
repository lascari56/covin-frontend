import React, { useState, useEffect, useMemo } from 'react'

import LotsFiltersView from "./lots-filters.view"

import {useFilters} from "@hooks/usefilters"

export default function LotsFiltersContainer({data, onFilter, ...props}) {
  const filters = useFilters({ data, onFilter, units: props.units })
  
  return (
    <LotsFiltersView
      {...props}
      {...filters}
    />
  )
}
