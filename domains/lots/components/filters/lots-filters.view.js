import React from 'react';

import { FilterGroup, FilterCheckbox } from 'components/filter';

import LotsFiltersHeader from "./components/header"

import * as S from "./lots-filters.styled"

const LotsFiltersView = () => {
  return (
    <S.Container>
      <LotsFiltersHeader />

      <S.Search size="big" />

      <FilterCheckbox title="Make" />

      <FilterCheckbox title="Model" />

      <FilterGroup title="Series">
      </FilterGroup>

      <FilterGroup title="Odometr">
      </FilterGroup>

      <FilterGroup title="Location">
      </FilterGroup>

      <FilterGroup title="Status">
      </FilterGroup>

      <FilterGroup title="Vehicle Condition Type">
      </FilterGroup>

      <FilterGroup title="Keys">
      </FilterGroup>

      <FilterGroup title="Fuel Type">
      </FilterGroup>

      <FilterGroup title="Drive Train">
      </FilterGroup>

      <FilterGroup title="Engine Type">
      </FilterGroup>

      <FilterGroup title="Title / Sale Document">
      </FilterGroup>

      <FilterGroup title="Seller">
      </FilterGroup>

      <S.Footer>
        <S.Action theme="outline" title="Save New Order" />

        <S.Action title="OK" />
      </S.Footer>
    </S.Container>
  );
}

export default LotsFiltersView;
