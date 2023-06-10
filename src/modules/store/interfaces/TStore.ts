// interfaces
import { ILogin } from '@/modules/login/slices/interfaces/ILogin'

export type TStore = () => {
	LoginState: ILogin
}
