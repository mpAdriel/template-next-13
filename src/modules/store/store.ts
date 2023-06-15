import storage from 'redux-persist/lib/storage'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import logger from 'redux-logger'

import LoginSlice from '../login/slices/LoginSlice'
import UserSlice from '../user/slices/UserSlice'

const persistConfig = {
	key: 'root',
	storage,
	// whitelist: ['LoginState'],
	blacklist: [],
}

const combinedReducers = combineReducers({
	LoginState: LoginSlice,
	UserState: UserSlice,
})

const rootReducer = (state: any, action: any) => {
	// dispatch({ type: 'RESET_STORE' })
	if (action.type === 'RESET_STORE') {
		state = undefined
	}

	return combinedReducers(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(logger),
})
