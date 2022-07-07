import React from 'react'

import {CabinetCard} from "@components/cabinet"

import {FormPhone} from "@components/form"

import * as S from './setting-personal-info.styled'

export default function SettingPersonalInfoView({className, formik}) {
  return (
    <CabinetCard className={className} title="Personal info" icon="/images/user2.svg">
      <S.Content>
        <S.Group title="Personal" description="Your name, e-mail and phone">
          <S.Input 
            size="big"
            placeholder="Email"
            isValid={!formik.touched.email || !formik.errors.email}
            value={formik.values.email}
            onChange={value => formik.setFieldValue('email', value)}
          />

          <S.Input
            size="big"
            placeholder="Name"
            isValid={!formik.touched.username || !formik.errors.username}
            value={formik.values.username}
            onChange={value => formik.setFieldValue('username', value)}
          />

          <FormPhone
            value={formik.values.phone}
            isValid={!formik.touched.phone || !formik.errors.phone}
            onChange={value => formik.setFieldValue('phone', value)}
          />

          {/* <S.Input
            size="big"
            placeholder="Phone"
            value={formik.values.phone}
            onChange={value => formik.setFieldValue('phone', value)}
          /> */}
        </S.Group>

        <S.Group title="Password" description="Your password settings">
          <S.Input
            size="big"
            placeholder="New password"
            isValid={!formik.touched.password || !formik.errors.password}
            value={formik.values.password}
            onChange={value => formik.setFieldValue('password', value)}
          />

          <S.Input
            size="big"
            placeholder="Confirm password"
            isValid={!formik.touched.passwordConfirm || !formik.errors.passwordConfirm}
            value={formik.values.passwordConfirm}
            onChange={value => formik.setFieldValue('passwordConfirm', value)}
          />
        </S.Group>
      </S.Content>

      <S.Action size="base" title="Save" theme="violet" onClick={formik.handleSubmit}/>
    </CabinetCard>
  )
}
