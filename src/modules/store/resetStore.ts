import { createAsyncThunk } from '@reduxjs/toolkit'

// slices
import { LoginSlice } from '../login/slices/LoginSlice'
import { UserSlice } from '../user/slices/UserSlice'

export const resetStore = createAsyncThunk(
	'resetStore',
	async (_, { dispatch }) => {
		await dispatch(LoginSlice.actions.clearLogin())
		await dispatch(UserSlice.actions.clearUser())
	}
)
