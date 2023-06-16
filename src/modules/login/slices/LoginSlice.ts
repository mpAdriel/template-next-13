import { createSlice } from '@reduxjs/toolkit'

// interfaces
import { TPayloadSetData } from '@/modules/store/interfaces'
// resources
import { INITIAL_STATE } from './InitialState'

export const LoginSlice = createSlice({
	name: 'LoginSlice',
	initialState: INITIAL_STATE,
	reducers: {
		clearLogin: () => {
			return INITIAL_STATE
		},
		setLogin: (state, action: TPayloadSetData) => {
			return { ...state, [action.payload.prop]: action.payload.value }
		},
	},
})

export const { setLogin, clearLogin } = LoginSlice.actions
export default LoginSlice.reducer
