import React, { useMemo } from 'react';

import FormCheckboxView from "./form-checkbox.view"

const FormCheckboxContainer = ({value, onChange, ...props}) => {

  const values = useMemo(() => {
    const res = {};
    
    console.log(value)

    value?.map(item => res[item] = true)

    return res;
  }, [value])

  const handleChange = (item) => {
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
    <FormCheckboxView {...props} values={values} onChange={handleChange} />
  );
}

export default FormCheckboxContainer;
