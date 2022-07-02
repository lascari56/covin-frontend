import React from 'react'

import {CabinetCard} from "@components/cabinet"

import * as S from './setting-personal-info.styled'

export default function SettingPersonalInfoView({className, formik}) {
  return (
    <CabinetCard className={className} title="Personal info" icon="/images/user2.svg">
      <S.Content>
        <S.Group title="Personal" description="Your name, e-mail and phone">
          <S.Input 
            size="big"
            placeholder="Email"
            value={formik.values.email}
            onChange={value => formik.setFieldValue('email', value)}
          />

          <S.Input
            size="big"
            placeholder="Name"
            value={formik.values.name}
            onChange={value => formik.setFieldValue('name', value)}
          />

          <S.Input
            size="big"
            placeholder="Phone"
            value={formik.values.phone}
            onChange={value => formik.setFieldValue('phone', value)}
          />
        </S.Group>

        <S.Group title="Password" description="Your password settings">
          <S.Input
            size="big"
            placeholder="New password"
            value={formik.values.password}
            onChange={value => formik.setFieldValue('password', value)}
          />

          <S.Input
            size="big"
            placeholder="Confirm password"
            value={formik.values.passwordConfirm}
            onChange={value => formik.setFieldValue('passwordConfirm', value)}
          />
        </S.Group>
      </S.Content>

      <S.Action size="base" title="Save" theme="violet" onClick={formik.handleSubmit}/>
    </CabinetCard>
  )
}
