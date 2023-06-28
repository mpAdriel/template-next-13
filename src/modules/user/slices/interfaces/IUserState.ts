export interface IUserState {
	accessToken: string
	refreshToken: string
	locale: string
	userData: {
		userProfile: object
		permissions: string[]
	}
}
