import React from 'react';

import {Button} from "@components"

import * as S from "./login-form.styled"

const LoginFormView = ({formik}) => {
  return (
    <S.Container>
      <S.Input placeholder="Email" value={formik.values.email} onChange={value => formik.setFieldValue('email', value)} />

      <S.Input placeholder="Password" value={formik.values.password} onChange={value => formik.setFieldValue('password', value)} />

      <Button theme="outline" title="Send" onClick={formik.handleSubmit} />
    </S.Container>
  );
}

export default LoginFormView;
