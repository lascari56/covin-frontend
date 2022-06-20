import React from 'react';

import {Button, Icon} from "@components"
import {CabinetCard} from "@components/cabinet"

import * as S from "./carfax-form.styled"

const CarfaxFormView = ({className}) => {
  return (
    <CabinetCard 
      className={className} 
      title="Buy Carfax" 
      IconComponent={<Icon size={26} name="carfax" />}
      RightComponent={<S.Logo src="/images/carfax.jpg" />}
    >
      <S.Container>
        <S.Input size="big" placeholder="Enter your VIN" />

        <Button title="BUY for 0.1$" />
      </S.Container>
    </CabinetCard>
  );
}

export default CarfaxFormView;
