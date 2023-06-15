import { IUserState } from './interfaces/IUserState'

export const INITIAL_STATE = {
	accessToken: '',
	userData: {
		userProfile: {},
		permissions: [],
	},
} as IUserState
