// interfaces
import { ILoginState } from '@/modules/login/slices/interfaces/ILoginState'
import { IUserState } from '@/modules/user/slices/interfaces/IUserState'

export type TStore = () => {
	LoginState: ILoginState
	UserState: IUserState
}
