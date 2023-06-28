import { createSlice } from '@reduxjs/toolkit'

// interfaces
import { INITIAL_STATE } from './AppInitialState'

import { TPayloadSetData } from '@/modules/store/interfaces'
// resources

export const AppSlice = createSlice({
	initialState: INITIAL_STATE,
	name: 'AppSlice',
	reducers: {
		clearApp: () => {
			return INITIAL_STATE
		},
		setApp: (state, action: TPayloadSetData) => {
			return { ...state, [action.payload.prop]: action.payload.value }
		},
	},
})

export const { setApp, clearApp } = AppSlice.actions
export default AppSlice.reducer
