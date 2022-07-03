import React from 'react';

import * as S from "./form-phone.styled"

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const FormPhoneView = ({className, county, label, isValid, warning, onChange, ...props}) => {
  return (
    <S.Container className={className} isValid={isValid}>
      {!!label && <S.Label>{label}</S.Label>}

      <PhoneInput
        {...props}
        country={county}
        placeholder=""
        onChange={phone => onChange(phone)}
      />

      {!!warning && <S.Warning>{warning}</S.Warning>}
    </S.Container>
  );
}

export default FormPhoneView;
