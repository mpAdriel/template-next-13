import { createAsyncThunk } from '@reduxjs/toolkit'

// slices
import { LoginSlice } from '../login/slices/LoginSlice'

export const resetStore = createAsyncThunk(
	'resetStore',
	async (_, { dispatch }) => {
		await dispatch(LoginSlice.actions.clear())
	}
)
