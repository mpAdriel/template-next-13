import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

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
  middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useActions: () => AppDispatch = useDispatch
export const useStore: TypedUseSelectorHook<RootState> = useSelector
