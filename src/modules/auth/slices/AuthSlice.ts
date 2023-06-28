import { createSlice } from '@reduxjs/toolkit'

// interfaces
import { INITIAL_STATE } from './AuthInitialState'

// resources
import { TPayloadSetData } from '@/modules/store/interfaces'

export const AuthSlice = createSlice({
	initialState: INITIAL_STATE,
	name: 'AuthSlice',
	reducers: {
		// clear
		clearAuth: () => {
			return INITIAL_STATE
		},
		// set state
		setAuth: (state, action: TPayloadSetData) => {
			return { ...state, [action.payload.prop]: action.payload.value }
		},
		setChangeEmailPass: (state, action: TPayloadSetData) => {
			return {
				...state,
				changeEmailPass: {
					...state.changeEmailPass,
					[action.payload.prop]: action.payload.value,
				},
			}
		},
		setLogin: (state, action: TPayloadSetData) => {
			return {
				...state,
				login: { ...state.login, [action.payload.prop]: action.payload.value },
			}
		},
		setPassword: (state, action: TPayloadSetData) => {
			return {
				...state,
				setPassword: {
					...state.setPassword,
					[action.payload.prop]: action.payload.value,
				},
			}
		},
		setSignup: (state, action: TPayloadSetData) => {
			return {
				...state,
				signup: {
					...state.signup,
					[action.payload.prop]: action.payload.value,
				},
			}
		},
	},
})

export const {
	setAuth,
	setChangeEmailPass,
	setLogin,
	setPassword,
	setSignup,
	clearAuth,
} = AuthSlice.actions
export default AuthSlice.reducer
