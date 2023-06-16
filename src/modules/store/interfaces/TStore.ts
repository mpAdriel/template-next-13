// interfaces
import { ILoginState } from '@/modules/login/slices/interfaces'
import { IUserState } from '@/modules/user/slices/interfaces'

export type TStore = () => {
	LoginState: ILoginState
	UserState: IUserState
}
