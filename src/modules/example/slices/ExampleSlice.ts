import { createSlice } from '@reduxjs/toolkit'

// interfaces
import { INITIAL_STATE } from './ExampleInitialState'

import { TPayloadSetData } from '@/modules/store/interfaces'
// resources

export const ExampleSlice = createSlice({
	initialState: INITIAL_STATE,
	name: 'ExampleSlice',
	reducers: {
		clearDataExample: () => {
			return INITIAL_STATE
		},
		setExampleState: (state, action: TPayloadSetData) => {
			return { ...state, [action.payload.prop]: action.payload.value }
		},
	},
})

export const { clearDataExample, setExampleState } = ExampleSlice.actions
export default ExampleSlice.reducer
