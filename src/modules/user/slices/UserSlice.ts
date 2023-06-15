import { createSlice } from '@reduxjs/toolkit'

// interfaces
import { TPayloadSetData } from '@/modules/store/interfaces/TPayloadSetData'
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
	},
})

export const { setUser } = UserSlice.actions
export default UserSlice.reducer
