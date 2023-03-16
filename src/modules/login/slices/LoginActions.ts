
// interfaces
import { ISingleError } from '@/modules/form/Interfaces'
// resources
import { loginFormValidation } from '../Validations'
import { scrollToError } from '@/modules/form/Utils'
// actions
import { setLogin } from './LoginSlice'
import { TDispatch, TStore } from '@/modules/store/Interfaces'

export const loginValidation = () => async (dispatch: TDispatch, getState: TStore) => {
  const { email, password } = getState().LoginState
  const errors = loginFormValidation({ email, password })

  const valuesErrors = Object.values(errors) as Array<ISingleError>
  if (valuesErrors.length > 0) scrollToError(valuesErrors[0])

  await dispatch(setLogin({ prop: 'errors', value: errors }))
  return { errors, isError: valuesErrors.length > 0 }
}
