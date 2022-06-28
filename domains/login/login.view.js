import React from 'react';

import {Icon} from "@components"

import Link from 'next/link'

import * as S from "./login.styled"

const LoginView = ({formik}) => {
  return (
    <S.Container>
      <S.Content>
        <S.Input size="big" type="auth" label="E-mail" placeholder="Enter email" value={formik.values.email} onChange={value => formik.setFieldValue('email', value)} />

        <S.Input size="big" type="auth" label="Password" placeholder="Enter password" value={formik.values.password} onChange={value => formik.setFieldValue('password', value)} />
      </S.Content>

      <Link href="/forgot">
        <S.Forgot>Forgot password?</S.Forgot>
      </Link>

      <S.Action size="large" title="Login" onClick={formik.handleSubmit} />

      <S.Action 
        theme="outline-grey"
        size="large"
        title="Log in with Google"
        IconComponent={<Icon name="google" size={22} />}
        onClick={formik.handleSubmit}
      />

      <S.SingUp>
        Don’t have an account?{" "}
        <Link href="/registration">
          <S.SingUpLink>Sign Up</S.SingUpLink>
        </Link>
      </S.SingUp>        
    </S.Container>
  );
}

export default LoginView;
