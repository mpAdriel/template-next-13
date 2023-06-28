// interfaces
import { IAuthState } from '@/modules/auth/interfaces'
import { IExampleState } from '@/modules/example/interfaces'
import { IUserState } from '@/modules/user/slices/interfaces'

export type TStore = () => {
	AuthState: IAuthState
	UserState: IUserState
	ExampleState: IExampleState
}
