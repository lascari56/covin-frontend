import React from 'react';

import Link from 'next/link'

import * as S from "./forgot.styled"

const ForgotView = ({formik}) => {
  return (
    <S.Container>
      <Link href="/">
        <S.Back name="arrow-left" size={26} />
      </Link>
      
      <S.Input size="big" type="auth" label="E-mail" placeholder="Enter email" value={formik.values.email} onChange={value => formik.setFieldValue('email', value)} />

      <S.Action 
        theme="outline"
        size="large"
        title="Reset the password"
        onClick={formik.handleSubmit}
      />
    </S.Container>
  );
}

export default ForgotView;
