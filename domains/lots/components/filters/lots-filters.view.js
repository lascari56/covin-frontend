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

const LotsFiltersView = ({formik, filters}) => {
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
        options={filters?.make}
        onChange={value => formik.setFieldValue('make', value)}
      />

      <FilterCheckbox
        title="Model"
        value={formik.values.model}
        options={filters?.model}
        onChange={value => formik.setFieldValue('model', value)}
      />

      <FilterCheckbox
        title="Series"
        value={formik.values.series}
        options={filters?.series}
        onChange={value => formik.setFieldValue('series', value)}
      />

      <FilterCheckbox title="Year" />

      <FilterCheckbox title="Odometr" />

      <FilterCheckbox
        title="Loss"
        value={formik.values.loss}
        options={filters?.loss}
        onChange={value => formik.setFieldValue('loss', value)}
      />

      <FilterCheckbox title="Damage" />

      <FilterCheckbox
        isSearch={false}
        title="Drive"
        value={formik.values.keys}
        options={filters?.keys}
        onChange={value => formik.setFieldValue('keys', value)}
      />

      <FilterCheckbox
        isSearch={false}
        title="Status"
        value={formik.values.status}
        options={filters?.status}
        onChange={value => formik.setFieldValue('status', value)}
      />

      <FilterCheckbox
        isSearch={false}
        title="Keys"
        value={formik.values.keys}
        options={filters?.keys}
        onChange={value => formik.setFieldValue('keys', value)}
      />

      <FilterCheckbox
        isSearch={false}
        title="Transmission"
        value={formik.values.transmission}
        options={filters?.transmission}
        onChange={value => formik.setFieldValue('transmission', value)}
      />

      <FilterCheckbox
        title="Engine Type"
        value={formik.values.engine}
        options={filters?.engine}
        onChange={value => formik.setFieldValue('engine', value)}
      />

      <FilterCheckbox
        isSearch={false}
        title="Fuel Type"
        value={formik.values.fuel}
        options={filters?.fuel}
        onChange={value => formik.setFieldValue('fuel', value)}
      />

      <FilterCheckbox title="Сost repair" />

      <FilterCheckbox
        title="Location"
        value={formik.values.location}
        options={filters?.location}
        onChange={value => formik.setFieldValue('location', value)}
      />

      <FilterCheckbox
        title="Document"
        value={formik.values.document}
        options={filters?.document}
        onChange={value => formik.setFieldValue('document', value)}
      />

      <S.Footer>
        <S.Action theme="outline" title="Save New Order" />

        <S.Action title="OK" />
      </S.Footer>
    </S.Container>
  );
}

export default LotsFiltersView;
