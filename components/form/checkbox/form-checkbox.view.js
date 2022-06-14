import React from 'react';

import FormCheckboxItem from "./components/item"

import * as S from "./form-checkbox.styled"

const FormCheckboxView = ({options, values, onChange}) => {
  return (
    <S.Container>
      {options?.map(item => (
        <FormCheckboxItem label={item?.label} count={item?.count} active={values[item.value]} key={item.value} onClick={() => onChange(item.value)} />
      ))}
    </S.Container>
  );
}

export default FormCheckboxView;
