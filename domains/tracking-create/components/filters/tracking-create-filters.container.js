import React from 'react';

import TrackingCreateFiltersView from "./tracking-create-filters.view"

import {useFilters} from "@hooks/useFilters"

const TrackingCreateFiltersContainer = ({data, onFilter, ...props}) => {
  const filters = useFilters({ data, onFilter })

  return (
    <TrackingCreateFiltersView {...props} {...filters} />
  );
}

export default TrackingCreateFiltersContainer;
