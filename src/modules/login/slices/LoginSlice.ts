import { createSlice } from '@reduxjs/toolkit'

// interfaces
import { TPayloadSetData } from '@/modules/store/interfaces/TPayloadSetData'
// resources
import { INITIAL_STATE } from './InitialState'

export const LoginSlice = createSlice({
	name: 'LoginSlice',
	initialState: INITIAL_STATE,
	reducers: {
		clear: () => {
			return INITIAL_STATE
		},
		setLogin: (state, action: TPayloadSetData) => {
			return { ...state, [action.payload.prop]: action.payload.value }
		},
	},
})

export const { setLogin } = LoginSlice.actions
export default LoginSlice.reducer
