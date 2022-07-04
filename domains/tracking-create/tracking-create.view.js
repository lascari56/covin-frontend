import React from 'react'

import { CabinetPage } from "@components/cabinet";

import TrackingCreateStep from "./components/step"
import TrackingCreateFilters from "./components/filters"
import TrackingCreateName from "./components/name"

import * as S from "./tracking-create.styled"

export default function TrackingCreateView({activeStep, filters, units, metaInfo, onBack, onNext}) {
  return (
    <CabinetPage>
      <S.Container>
        <S.Header>
          <S.Title>{metaInfo?.title}</S.Title>

          <S.Description>{metaInfo?.description}</S.Description>
        </S.Header>

        <TrackingCreateStep active={activeStep === 1} number={1} title="Notification">
          
        </TrackingCreateStep>

        <TrackingCreateStep 
          active={activeStep === 2}
          next={activeStep === 1}
          number={2}
          title="Filter settings"
        >
          <TrackingCreateFilters {...filters} units={units} onBack={onBack} onNext={onNext} />
        </TrackingCreateStep>

        <TrackingCreateStep 
          last
          active={activeStep === 3}
          number={3}
          title="Enter filter name"
        >
          <TrackingCreateName onBack={onBack} onNext={onNext} />
        </TrackingCreateStep>
      </S.Container>
    </CabinetPage>
  )
}
