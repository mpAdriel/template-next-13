import { createSlice } from '@reduxjs/toolkit'

// interfaces
import { TPayloadSetData } from '@/modules/store/interfaces'
import { TPayloadTokens } from './interfaces'
// resources
import { INITIAL_STATE } from './InitialState'

export const UserSlice = createSlice({
	name: 'UserSlice',
	initialState: INITIAL_STATE,
	reducers: {
		clearUser: () => {
			return INITIAL_STATE
		},
		setUser: (state, action: TPayloadSetData) => {
			return { ...state, [action.payload.prop]: action.payload.value }
		},
		// api
		setTokens: (state, action: TPayloadTokens) => {
			return {
				...state,
				accessToken: action.payload.accessToken,
				refreshToken: action.payload.refreshToken,
			}
		},
	},
})

export const { setUser, clearUser, setTokens } = UserSlice.actions
export default UserSlice.reducer
