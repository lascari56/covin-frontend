import React from 'react';

import {FormInput} from "@components/form"

import FilterGroup from "../group"

import * as S from "./filter-range.styled"

const FilterRangeView = ({value, onChange, ...props}) => {
  return (
    <FilterGroup {...props}>
      <S.Container>
        <FormInput 
          theme="white"
          label="Min" 
          placeholder="0"
          value={value[0]}
          onChange={(event) => onChange(event, 0)}
        />

        <S.Hr>
          <S.HrLine />
        </S.Hr>

        <FormInput
          theme="white"
          label="Max"
          placeholder="250000"
          value={value[1]}
          onChange={(event) => onChange(event, 1)}
        />
      </S.Container>
    </FilterGroup>
  );
}

export default FilterRangeView;
