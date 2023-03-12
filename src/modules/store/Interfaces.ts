import { AnyAction, Dispatch, EmptyObject, ThunkDispatch } from '@reduxjs/toolkit'
import { PersistPartial } from 'redux-persist/es/persistReducer'

// slices
import { InterfaceLogin } from '../login/Interfaces'

export type TypeDispatch = ThunkDispatch<EmptyObject & {
  LoginState: InterfaceLogin;
} & PersistPartial, undefined, AnyAction> & Dispatch<AnyAction>

export type TypeStore = () => {
  LoginState: InterfaceLogin,
}
