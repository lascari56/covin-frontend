import {createSelector} from 'reselect';

const lotsSelector = store => store.templates;

export const selectTemplates = createSelector(lotsSelector, ({templates}) => templates);