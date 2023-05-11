import storage from 'redux-persist/lib/storage'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import logger from 'redux-logger'

import LoginSlice from '../login/slices/LoginSlice'

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['LoginState'],
  blacklist: []
}

const rootReducer = combineReducers({
  LoginState: LoginSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(logger)
})
