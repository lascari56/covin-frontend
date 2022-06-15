import React from 'react';

import { FilterCheckbox, FilterRange } from 'components/filter';

import LotsFiltersHeader from "./components/header"

import * as S from "./lots-filters.styled"

const LotsFiltersView = ({formik, filters, modelFilters, seriesFilters, loading, onReset}) => {
  return (
    <S.Container>
      <LotsFiltersHeader onReset={onReset} />

      <FilterCheckbox
        initialShow
        title="Make"
        value={formik.values.make}
        options={filters?.make}
        disabled={loading}
        onChange={value => formik.setFieldValue('make', value)}
      />

      <FilterCheckbox
        title="Model"
        value={formik.values.model}
        options={modelFilters}
        disabled={loading}
        onChange={value => formik.setFieldValue('model', value)}
      />

      <FilterCheckbox
        title="Series"
        value={formik.values.series}
        options={seriesFilters}
        disabled={loading}
        onChange={value => formik.setFieldValue('series', value)}
      />

      <FilterCheckbox title="Year" disabled={loading} />

      <FilterRange
        title="Odometr"
        value={formik.values.odometr}
        disabled={loading}
        onChange={value => formik.setFieldValue('odometr', value)}
      />

      <FilterCheckbox
        title="Loss"
        value={formik.values.loss}
        options={filters?.loss}
        disabled={loading}
        onChange={value => formik.setFieldValue('loss', value)}
        onChangeTemplate={() => {}}
      />

      <FilterCheckbox
        title="Damage"
        value={formik.values.damage}
        options={filters?.damage}
        disabled={loading}
        onChange={value => formik.setFieldValue('damage', value)}
        onChangeTemplate={() => {}}
      />

      <FilterCheckbox
        isSearch={false}
        title="Drive"
        value={formik.values.keys}
        options={filters?.keys}
        disabled={loading}
        onChange={value => formik.setFieldValue('keys', value)}
      />

      <FilterCheckbox
        isSearch={false}
        title="Status"
        value={formik.values.status}
        options={filters?.status}
        disabled={loading}
        onChange={value => formik.setFieldValue('status', value)}
      />

      <FilterCheckbox
        isSearch={false}
        title="Keys"
        value={formik.values.keys}
        options={filters?.keys}
        disabled={loading}
        onChange={value => formik.setFieldValue('keys', value)}
      />

      <FilterCheckbox
        isSearch={false}
        title="Transmission"
        value={formik.values.transmission}
        options={filters?.transmission}
        disabled={loading}
        onChange={value => formik.setFieldValue('transmission', value)}
      />

      <FilterCheckbox
        title="Engine Type"
        value={formik.values.engine}
        options={filters?.engine}
        disabled={loading}
        onChange={value => formik.setFieldValue('engine', value)}
      />

      <FilterCheckbox
        isSearch={false}
        title="Fuel Type"
        value={formik.values.fuel}
        options={filters?.fuel}
        disabled={loading}
        onChange={value => formik.setFieldValue('fuel', value)}
      />

      <FilterRange
        title="Сost repair"
        value={formik.values.cost_repair}
        disabled={loading}
        onChange={value => formik.setFieldValue('cost_repair', value)}
      />

      <FilterCheckbox
        title="Location"
        value={formik.values.location}
        options={filters?.location}
        disabled={loading}
        onChange={value => formik.setFieldValue('location', value)}
        onChangeTemplate={() => {}}
      />

      <FilterCheckbox
        title="Document"
        value={formik.values.document}
        options={filters?.document}
        disabled={loading}
        onChange={value => formik.setFieldValue('document', value)}
        onChangeTemplate={() => {}}
      />

      <FilterCheckbox
        isSearch={false}
        title="Site"
        value={formik.values.site}
        options={filters?.site}
        disabled={loading}
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
