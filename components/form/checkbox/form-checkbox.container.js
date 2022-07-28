import React, { useMemo } from 'react';

import FormCheckboxView from "./form-checkbox.view"

const FormCheckboxContainer = ({value, onChange, ...props}) => {

  const values = useMemo(() => {
    if (typeof value !== 'object') return;

    const res = {};
    
    console.log(value)

    value?.map(item => res[item] = true)

    return res;
  }, [value])

  const handleChange = (item) => {
    if (typeof value !== 'object') {
      onChange(item);

      return;
    }

    const _value = [...value]

    const index = _value?.indexOf(item)

    if (index !== -1) {
      _value?.splice(index, 1)
    } else {
      _value.push(item)
    }

    onChange(_value)
  }

  return (
    <FormCheckboxView {...props} values={values} value={value} onChange={handleChange} />
  );
}

export default FormCheckboxContainer;
