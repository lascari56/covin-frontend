import {createSelector} from 'reselect';

const lotSelector = store => store.lot;

export const selectLots = createSelector(lotSelector, ({lots}) => lots);