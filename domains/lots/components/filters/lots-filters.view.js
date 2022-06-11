import React from 'react';

import { FilterGroup, FilterCheckbox } from 'components/filter';

import LotsFiltersHeader from "./components/header"

import * as S from "./lots-filters.styled"

const make =  [
  {value: "100 S Quat", count: 1},
  {value: "100 Wagon", count: 1},
  {value: "90 S", count: 1},
  {value: "A3", count: 1},
  {value: "A3 2", count: 1},
  {value: "A3 2.0", count: 1},
  {value: "A3 2.0 Pre", count: 1},
  {value: "A3 2.0 Spo", count: 1},
]

const LotsFiltersView = ({formik}) => {
  return (
    <S.Container>
      <LotsFiltersHeader />

      <S.Search
        size="big"
        value={formik.values.search}
        onChange={value => formik.setFieldValue('name', value)}
      />

      <FilterCheckbox
        title="Make"
        value={formik.values.make}
        options={make}
        onChange={value => formik.setFieldValue('make', value)}
      />

      <FilterCheckbox title="Model" />

      <FilterCheckbox title="Series" />

      <FilterCheckbox title="Odometr" />

      <FilterCheckbox title="Location" />

      <FilterCheckbox title="Status" />

      <FilterCheckbox title="Vehicle Condition Type" />

      <FilterCheckbox title="Keys" />

      <FilterCheckbox title="Fuel Type" />

      <FilterCheckbox title="Drive Train" />

      <FilterCheckbox title="Engine Type" />

      <FilterCheckbox title="Title / Sale Document" />

      <FilterCheckbox title="Seller" />

      <S.Footer>
        <S.Action theme="outline" title="Save New Order" />

        <S.Action title="OK" />
      </S.Footer>
    </S.Container>
  );
}

export default LotsFiltersView;
