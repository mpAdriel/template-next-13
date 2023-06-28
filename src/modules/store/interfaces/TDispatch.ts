import {
	AnyAction,
	Dispatch,
	EmptyObject,
	ThunkDispatch,
} from '@reduxjs/toolkit'
import { PersistPartial } from 'redux-persist/es/persistReducer'

// interfaces
import { IUserState } from '@/modules/user/slices/interfaces'
import { IAuthState } from '@/modules/auth/interfaces'
import { IExampleState } from '@/modules/example/interfaces'

export type TDispatch = ThunkDispatch<
	EmptyObject & {
		AuthState: IAuthState
		UserState: IUserState
		ExampleState: IExampleState
	} & PersistPartial,
	undefined,
	AnyAction
> &
	Dispatch<AnyAction>
