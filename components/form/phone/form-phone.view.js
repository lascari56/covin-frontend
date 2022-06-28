import React from 'react';

import * as S from "./form-phone.styled"

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const FormPhoneView = ({className, county}) => {
  return (
    <S.Container className={className}>
      <S.Label>Phone</S.Label>

      <PhoneInput
        country={county}
        placeholder=""
        // onChange={phone => this.setState({ phone })}
      />

      <S.Warning>Phone number is required for SMS account verification</S.Warning>
    </S.Container>
  );
}

export default FormPhoneView;
