import { createSlice } from '@reduxjs/toolkit'
import { InterfaceLogin, TypePayloadSetLogin } from '../Interfaces'
import { actionSetLogin, actionLoginFormValidation } from './LoginActions'

const INITIAL_STATE = {
  email: '',
  password: '',
  errors: {}
} as InterfaceLogin

export const LoginSlice = createSlice({
  name: 'LoginSlice',
  initialState: INITIAL_STATE,
  reducers: {
    setLogin: (state, action: TypePayloadSetLogin) => actionSetLogin(state, action),
    loginValidation: (state) => actionLoginFormValidation(state)
  }
})

export const {
  setLogin,
  loginValidation
} = LoginSlice.actions
export default LoginSlice.reducer
