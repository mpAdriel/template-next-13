import { AnyAction, Dispatch, EmptyObject, PayloadAction, ThunkDispatch } from '@reduxjs/toolkit'
import { PersistPartial } from 'redux-persist/es/persistReducer'

// slices
import { ILogin } from '../login/Interfaces'

export type TDispatch = ThunkDispatch<EmptyObject & {
  LoginState: ILogin;
} & PersistPartial, undefined, AnyAction> & Dispatch<AnyAction>

export type TStore = () => {
  LoginState: ILogin,
}

export type TPayloadSetData = PayloadAction<{prop: string, value: any}>
