import { createSlice } from '@reduxjs/toolkit'
import { InterfaceLogin, TypePayloadSetLogin } from '../Interfaces'

const INITIAL_STATE = {
  email: '',
  password: '',
  errors: {}
} as InterfaceLogin

export const LoginSlice = createSlice({
  name: 'LoginSlice',
  initialState: INITIAL_STATE,
  reducers: {
    setLogin: (state, action: TypePayloadSetLogin) => {
      return { ...state, [action.payload.prop]: action.payload.value }
    }
  }
})

export const {
  setLogin
} = LoginSlice.actions
export default LoginSlice.reducer
