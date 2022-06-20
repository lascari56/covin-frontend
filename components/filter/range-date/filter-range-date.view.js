import React from 'react';

import FilterGroup from "../group"

import * as S from "./filter-range-date.styled"

const FilterRangeDateView = ({value, optionsMin, optionsMax, onChange, ...props}) => {
  return (
    <FilterGroup {...props}>
      <S.Container>
        <S.Select 
          size="large"
          theme="white"
          label="Min" 
          placeholder="Сhoose"
          value={value.min}
          options={optionsMin}
          onChange={(event) => onChange(event, "min")}
        />

        <S.Hr>
          <S.HrLine />
        </S.Hr>

        <S.Select
          size="large"
          theme="white"
          label="Max"
          options={optionsMax}
          placeholder="Сhoose"
          value={value.max}
          onChange={(event) => onChange(event, "max")}
        />
      </S.Container>
    </FilterGroup>
  );
}

export default FilterRangeDateView;
