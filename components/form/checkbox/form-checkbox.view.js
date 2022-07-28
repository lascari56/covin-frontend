import React from 'react';

import FormCheckboxItem from "./components/item"

import * as S from "./form-checkbox.styled"

const FormCheckboxView = ({options, values, value, type, onChange}) => {
  return (
    <S.Container>
      {options?.map(item => (
        <FormCheckboxItem label={item?.label} count={item?.count} active={typeof value === 'object' ? values[item.value] : value === item.value} key={item.value} onClick={() => onChange(item.value)} />
      ))}
    </S.Container>
  );
}

// FormCheckboxView.defaultProps = {
//   type: "multi"
// }

export default FormCheckboxView;
