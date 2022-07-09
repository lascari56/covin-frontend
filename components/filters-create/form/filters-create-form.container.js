import React, { useMemo } from 'react';

import FiltersCreateFormView from "./filters-create-form.view"

import {useFilters} from "@hooks/useFilters"

const FiltersCreateFormContainer = ({data, onSubmit, ...props}) => {
  const filters = useFilters({ data, onSubmit })

  // const isEmpty = useMemo(() => {
  //   return true;
  // }, [filters.formik?.values])

  return (
    <FiltersCreateFormView {...props} {...filters} />
  );
}

export default FiltersCreateFormContainer;
