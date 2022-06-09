import {createSelector} from 'reselect';

const authSelector = store => store.auth;

export const selectToken = createSelector(authSelector, ({token}) => token?.token);

export const selectUser = createSelector(authSelector, ({user}) => user);