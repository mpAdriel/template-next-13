import {
	AnyAction,
	Dispatch,
	EmptyObject,
	ThunkDispatch,
} from '@reduxjs/toolkit'
import { PersistPartial } from 'redux-persist/es/persistReducer'

// interfaces
import { ILoginState } from '@/modules/login/slices/interfaces/ILoginState'
import { IUserState } from '@/modules/user/slices/interfaces/IUserState'

export type TDispatch = ThunkDispatch<
	EmptyObject & {
		LoginState: ILoginState
		UserState: IUserState
	} & PersistPartial,
	undefined,
	AnyAction
> &
	Dispatch<AnyAction>
