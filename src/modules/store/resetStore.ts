import { createAsyncThunk } from '@reduxjs/toolkit'

// slices
import { clearLogin } from '../login/slices/actions'
import { clearUser } from '../user/slices/actions'

export const resetStore = createAsyncThunk(
	'resetStore',
	async (_, { dispatch }) => {
		await dispatch(clearLogin())
		await dispatch(clearUser())
	}
)
