import React, {useState, useEffect} from 'react';

import FormSearchView from "./form-search.view"

import {useDebouncedCallback} from 'use-debounce';

const FormSearchContainer = ({onChange, ...props}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handlerUpdate = useDebouncedCallback(value => {
    onChange(value)
  }, 1000);

  const handlerChange = (value) => {
    setSearchTerm(value)

    handlerUpdate(value)
  }

  return (
    <FormSearchView {...props} value={searchTerm} onChange={handlerChange} />
  );
}

export default FormSearchContainer;
