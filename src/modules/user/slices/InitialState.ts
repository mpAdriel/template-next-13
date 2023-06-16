import { IUserState } from './interfaces'

export const INITIAL_STATE = {
	accessToken: '',
	userData: {
		userProfile: {},
		permissions: ['ADMIN'],
	},
} as IUserState
