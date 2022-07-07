import {configureStore, combineReducers} from '@reduxjs/toolkit';

import {commonName, commonReducer} from './commonReducers';
import {authName, authReducer} from './authReducers';
import {lotsName, lotsReducer} from './lotsReducers';

import {persistStore, persistReducer} from 'redux-persist';
import {getPersistConfig} from 'redux-deep-persist';

import storage from 'redux-persist/lib/storage'
// import AsyncStorage from '@react-native-async-storage/async-storage';

const persistCommonConfig = getPersistConfig({
  key: 'common',
  storage,
  blacklist: [],
  rootReducer: commonReducer,
});

const persistAuthConfig = getPersistConfig({
  key: 'auth',
  storage,
  blacklist: [
    'user.loading',
    'user.error',
  ],
  rootReducer: authReducer,
});

const persistLotsConfig = getPersistConfig({
  key: 'lots',
  storage,
  blacklist: [
    'templates.loading',
    'templates.error',
  ],
  rootReducer: authReducer,
});

const rootReducer = combineReducers({
  [commonName]: persistReducer(persistCommonConfig, commonReducer),
  [authName]: persistReducer(persistAuthConfig, authReducer),
  [lotsName]: persistReducer(persistLotsConfig, lotsReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // immutableCheck: false,
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
