import React from 'react';

import * as S from "./form-select.styled"

const FormSSelectView = ({className, options, label, placeholder, value, size, displayType, onChange}) => {
  return (
    <S.Container className={className} size={size} displayType={displayType}>
      {!!label && <S.Label size={size} displayType={displayType}>{label}</S.Label>}

      <S.Content>
        <S.Arrow src="/images/arrow.svg" />

        <S.Inner value={value} size={size} onChange={(event) => onChange(event.target.value)}>
          {!!placeholder && <option value="">{placeholder}</option>}

          {options?.map(item => (
            <option value={item?.value} key={item?.value} disabled={item.disabled}>{item?.label}</option>
          ))}
        </S.Inner>
      </S.Content>
    </S.Container>
  );
}

export default FormSSelectView;
