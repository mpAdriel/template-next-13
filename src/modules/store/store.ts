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

export const useActions: () => typeof store.dispatch = useDispatch
export const useStore: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector
