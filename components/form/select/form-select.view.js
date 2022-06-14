import React from 'react';

import * as S from "./form-select.styled"

const FormSSelectView = ({className, options, label, placeholder, value, size, onChange}) => {
  return (
    <S.Container className={className} size={size}>
      <S.Arrow src="/images/arrow.svg" />

      {!!label && <S.Label>{label}</S.Label>}

      <S.Inner value={value} size={size} onChange={(event) => onChange(event.target.value)}>
        {!!placeholder && <option value="">{placeholder}</option>}

        {options?.map(item => (
          <option value={item?.value} key={item?.value}>{item?.label}</option>
        ))}
      </S.Inner>
    </S.Container>
  );
}

export default FormSSelectView;
