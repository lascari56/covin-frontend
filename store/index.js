import {configureStore, combineReducers} from '@reduxjs/toolkit';

import {commonName, commonReducer} from './commonReducers';
import {authName, authReducer} from './authReducers';
import {lotName, lotReducer} from './lotReducers';

import {persistStore, persistReducer} from 'redux-persist';
import {getPersistConfig} from 'redux-deep-persist';

import storage from 'redux-persist/lib/storage'
// import AsyncStorage from '@react-native-async-storage/async-storage';

const persistLotConfig = getPersistConfig({
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

const persistCommonConfig = getPersistConfig({
  key: 'lot',
  storage,
  blacklist: [
    'lot.loading',
    'lot.error',
  ],
  rootReducer: authReducer,
});

const rootReducer = combineReducers({
  [commonName]: persistReducer(persistCommonConfig, commonReducer),
  [authName]: persistReducer(persistAuthConfig, authReducer),
  [lotName]: persistReducer(persistLotConfig, lotReducer),
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
