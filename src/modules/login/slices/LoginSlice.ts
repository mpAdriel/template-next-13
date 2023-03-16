import { createSlice } from '@reduxjs/toolkit'

// interfaces
import { ILogin } from '../Interfaces'
import { TPayloadSetData } from '@/modules/store/Interfaces'

const INITIAL_STATE = {
  email: '',
  password: '',
  errors: {},
  isLoading: false
} as ILogin

export const LoginSlice = createSlice({
  name: 'LoginSlice',
  initialState: INITIAL_STATE,
  reducers: {
    setLogin: (state, action: TPayloadSetData) => {
      return { ...state, [action.payload.prop]: action.payload.value }
    }
  }
})

export const {
  setLogin
} = LoginSlice.actions
export default LoginSlice.reducer
