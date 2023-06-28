import {
	IChangeEmailPassState,
	ILoginState,
	ISignupState,
	ISetPasswordState,
} from './'

export interface IAuthState {
	login: ILoginState
	signup: ISignupState
	setPassword: ISetPasswordState
	changeEmailPass: IChangeEmailPassState
}
