import { createAsyncThunk } from '@reduxjs/toolkit'

// slices
import { clearAuth } from '../auth/slices/actions'
import { clearUser } from '../user/slices/actions'

export const resetStore = createAsyncThunk(
	'resetStore',
	async (_, { dispatch }) => {
		await dispatch(clearAuth())
		await dispatch(clearUser())
	}
)
