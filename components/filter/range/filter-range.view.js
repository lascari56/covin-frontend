import React from 'react';

import {FormInput} from "@components/form"

import FilterGroup from "../group"

import * as S from "./filter-range.styled"

const FilterRangeView = ({value, onChange, ...props}) => {
  return (
    <FilterGroup {...props}>
      <S.Container>
        <FormInput 
          autofocus
          theme="white"
          label="Min" 
          placeholder="0"
          value={value?.min}
          onChange={(event) => onChange(event, "min")}
        />

        <S.Hr>
          <S.HrLine />
        </S.Hr>

        <FormInput
          theme="white"
          label="Max"
          placeholder="250000"
          value={value?.max}
          onChange={(event) => onChange(event, "max")}
        />
      </S.Container>
    </FilterGroup>
  );
}

export default FilterRangeView;
