import React from 'react';

import {Button, Icon} from "@components"
import {CabinetCard} from "@components/cabinet"

import * as S from "./carfax-form.styled"

const CarfaxFormView = ({className, formik, title, loading, type, user}) => {
  return (
    <CabinetCard 
      className={className} 
      title={`Buy ${title}`} 
      IconComponent={<Icon size={26} name="carfax" />}
      RightComponent={<S.Logo src="/images/carfax.jpg" />}
    >
      <S.Container>
        <S.Input
          size="big"
          placeholder="Enter your VIN"
          isValid={!formik.touched.vin || !formik.errors.vin}
          value={formik.values.vin}
          onChange={value => formik.setFieldValue('vin', value)}
        />

        <Button title={`BUY for ${user?.price?.carfax || 1.5} $`} disabled={loading} onClick={formik.handleSubmit} />
      </S.Container>
    </CabinetCard>
  );
}

export default CarfaxFormView;
