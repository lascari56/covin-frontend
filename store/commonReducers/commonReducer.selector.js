import {createSelector} from 'reselect';

const commonSelector = store => store.common;

export const selectUnits = createSelector(commonSelector, ({units}) => units);

export const selectCountry = createSelector(commonSelector, ({country}) => country);