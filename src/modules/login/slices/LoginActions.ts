
// interfaces
import { InterfaceValidateUnique } from '@/modules/form/Interfaces'
import { TypePayloadSetLogin, TypeStateLogin } from '../Interfaces'
// resources
import { loginFormValidation } from '../Validations'
import { scrollToError } from '@/modules/form/Utils'
// actions
import { setLogin } from './LoginSlice'

export const actionLoginFormValidation = (state: TypeStateLogin) => {
  const errors = loginFormValidation({ email: state.email, password: state.password, errors: state.errors })

  const valuesErrors = Object.values(errors) as Array<InterfaceValidateUnique>
  if (valuesErrors.length > 0) scrollToError(valuesErrors[0])

  return { ...state, errors }
}

export const actionSetLogin = (
  state: TypeStateLogin,
  action: TypePayloadSetLogin
) => {
  return { ...state, [action.payload.prop]: action.payload.value }
}

export const testMethodThunk = (prop:string) => (dispatch, getState) => {
  console.log('prop', prop)
  console.log('getState()', getState())
  dispatch(setLogin({ prop: 'email', value: 'adriel@gmail.com' }))
}
