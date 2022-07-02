import React from 'react';

import {Icon} from "@components"

import Link from 'next/link'

import * as S from "./registration.styled"

const RegistrationView = ({formik, county}) => {
  return (
    <S.Container>
      <S.Content>
        <S.Input 
          size="big" 
          type="auth" 
          label="E-mail" 
          placeholder="Enter email" 
          value={formik.values.email} 
          onChange={value => formik.setFieldValue('email', value)}
        />

        <S.Phone 
          county={county}
          value={formik.values.phone}
          onChange={value => formik.setFieldValue('phone', value)}
        />

        <S.Input
          size="big"
          type="auth"
          label="Password"
          placeholder="Enter password"
          value={formik.values.password}
          onChange={value => formik.setFieldValue('password', value)} 
        />
      </S.Content>

      <S.Action size="large" title="Sign Up" onClick={formik.handleSubmit} />

      <S.Action 
        theme="outline-grey"
        size="large"
        title="Log in with Google"
        IconComponent={<Icon name="google" size={22} />}
        onClick={formik.handleSubmit}
      />

      <Link href="/">
        <S.Login>I already have account</S.Login> 
      </Link>       
    </S.Container>
  );
}

export default RegistrationView;
