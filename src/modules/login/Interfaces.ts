import { PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'

// resources
import { InterfaceValidateUnique } from '../form/Interfaces'

export interface InterfaceLoginError {
  email?: InterfaceValidateUnique,
  password?: InterfaceValidateUnique
}

export interface InterfaceLogin {
  email: string,
  password: string,
  errors: InterfaceLoginError,
}

export type TypeStateLogin = WritableDraft<InterfaceLogin>
export type TypePayloadSetLogin = PayloadAction<{prop: string, value: any}>
