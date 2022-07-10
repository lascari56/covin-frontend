import React from 'react';

import { FilterCheckbox, FilterRange, FilterRangeDate } from 'components/filter';

import LotsFiltersHeader from "./components/header"

import * as S from "./lots-filters.styled"

const LotsFiltersView = ({formik, filters, modelFilters, seriesFilters, units, onReset}) => {
  return (
    <S.Container>
      <LotsFiltersHeader onReset={onReset} />

      <FilterCheckbox
        initialShow
        title="Make"
        value={formik.values.make}
        options={filters?.make}
        onChange={value => formik.setFieldValue('make', value)}
      />

      <FilterCheckbox
        title="Model"
        value={formik.values.model}
        options={modelFilters}
        onChange={value => formik.setFieldValue('model', value)}
      />

      <FilterCheckbox
        title="Series"
        value={formik.values.series}
        options={seriesFilters}
        onChange={value => formik.setFieldValue('series', value)}
      />

      <FilterRangeDate
        title="Year"
        value={formik.values.year}
        min={2011}
        onChange={value => formik.setFieldValue('year', value)}
      />

      <FilterRange
        title={`Odometer, ${units?.speed}`}
        value={formik.values.odometer}
        onChange={value => formik.setFieldValue('odometer', value)}
      />

      <FilterCheckbox
        title="Loss"
        value={formik.values.loss}
        options={filters?.loss}
        onChange={value => formik.setFieldValue('loss', value)}
        // onChangeTemplate={() => {}}
      />

      <FilterCheckbox
        title="Damage"
        value={formik.values.damage}
        options={filters?.damage}
        onChange={value => formik.setFieldValue('damage', value)}
        // onChangeTemplate={() => {}}
      />

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

      <FilterRange
        title="Сost repair"
        value={formik.values.cost_repair}
        onChange={value => formik.setFieldValue('cost_repair', value)}
      />

      <FilterCheckbox
        title="Location"
        value={formik.values.location}
        options={filters?.location}
        onChange={value => formik.setFieldValue('location', value)}
        // onChangeTemplate={() => {}}
      />

      <FilterCheckbox
        title="Document"
        value={formik.values.document}
        options={filters?.document}
        onChange={value => formik.setFieldValue('document', value)}
        // onChangeTemplate={() => {}}
      />

      <FilterCheckbox
        isSearch={false}
        title="Site"
        value={formik.values.site}
        options={filters?.site}
        onChange={value => formik.setFieldValue('site', value)}
      />

      <S.Footer>
        <S.Action theme="outline" title="Save New Order" />

        <S.Action title="OK" onClick={formik.handleSubmit} />
      </S.Footer>
    </S.Container>
  );
}

export default LotsFiltersView;
