export interface IUserState {
	accessToken: string
	userData: {
		userProfile: object
		permissions: string[]
	}
}
