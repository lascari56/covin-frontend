import React from 'react'

import {Loader} from "@components"

import { CabinetPage } from "@components/cabinet";

import {FiltersCreateStep, FiltersCreateForm, FiltersCreateName} from "@components/filters-create"

import * as S from "./tracking-create.styled"

export default function TrackingCreateView({filtersCreate, metaInfo}) {
  return (
    <CabinetPage>
      <S.Container>
        <S.Header>
          <S.Title>{metaInfo?.title}</S.Title>

          <S.Description>{metaInfo?.description}</S.Description>
        </S.Header>

        <FiltersCreateStep active={filtersCreate.activeStep === 1} number={1} title="Notification">
          
        </FiltersCreateStep>

        <FiltersCreateStep 
          active={filtersCreate.activeStep === 2}
          next={filtersCreate.activeStep === 1}
          number={2}
          title="Filter settings"
        >
          <FiltersCreateForm {...filtersCreate.filters} units={filtersCreate.units} onBack={filtersCreate.onBack} onSubmit={filtersCreate.onSaveFilters} />
        </FiltersCreateStep>

        <FiltersCreateStep 
          last
          active={filtersCreate.activeStep === 3}
          number={3}
          title="Enter filter name"
        >
          <FiltersCreateName onBack={filtersCreate.onBack} onSubmit={filtersCreate.onSaveName} />
        </FiltersCreateStep>
      </S.Container>

      {filtersCreate.filters?.loading && <Loader isBackground />}
    </CabinetPage>
  )
}
