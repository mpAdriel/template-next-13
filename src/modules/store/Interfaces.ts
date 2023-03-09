import { AnyAction, Dispatch, EmptyObject } from '@reduxjs/toolkit'
import { TypedUseSelectorHook } from 'react-redux'
import { PersistPartial } from 'redux-persist/es/persistReducer'

// slices
import { InterfaceLogin } from '../login/Interfaces'

export type TypeDispatch = Dispatch<AnyAction>
export type TypeStore = TypedUseSelectorHook<EmptyObject & {
  LoginState: InterfaceLogin;
} & PersistPartial>
