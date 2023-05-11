import { AnyAction, Dispatch, EmptyObject, ThunkDispatch } from '@reduxjs/toolkit'
import { PersistPartial } from 'redux-persist/es/persistReducer'

// interfaces
import { ILogin } from '@/modules/login/slices/interfaces/ILogin'

export type TDispatch = ThunkDispatch<EmptyObject & {
  LoginState: ILogin;
} & PersistPartial, undefined, AnyAction> & Dispatch<AnyAction>
