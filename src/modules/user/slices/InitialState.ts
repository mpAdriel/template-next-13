import { IUserState } from './interfaces'

export const INITIAL_STATE = {
	accessToken: '',
	refreshToken: '',
	locale: '',
	userData: {
		userProfile: {},
		permissions: ['ADMIN'],
	},
} as IUserState
