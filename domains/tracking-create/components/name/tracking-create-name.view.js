import React from 'react';

import { FormInput } from 'components/form';

import * as S from "./tracking-create-name.styled"

const TrackingCreateNameView = ({formik, onBack}) => {
  return (
    <S.Container>
      <S.Content>
        <FormInput
          value={formik.values.name}
          placeholder="Enter filter name"
          isValid={!formik.touched.name || !formik.errors.name}
          onChange={value => formik.setFieldValue('name', value)}
        />
      </S.Content>

      <S.Footer>
        <S.Action size="smaller" theme="outline" title="Back" onClick={onBack} />

        <S.Action size="smaller" title="Finish" onClick={formik.handleSubmit} />
      </S.Footer>
    </S.Container>
  );
}

export default TrackingCreateNameView
