
// interfaces
import { InterfaceValidateUnique } from '@/modules/form/Interfaces'
// resources
import { loginFormValidation } from '../Validations'
import { scrollToError } from '@/modules/form/Utils'
// actions
import { setLogin } from './LoginSlice'
import { TypeDispatch, TypeStore } from '@/modules/store/Interfaces'

export const loginValidation = () => (dispatch: TypeDispatch, getState: TypeStore) => {
  const { email, password } = getState().LoginState
  const errors = loginFormValidation({ email, password })

  const valuesErrors = Object.values(errors) as Array<InterfaceValidateUnique>
  if (valuesErrors.length > 0) scrollToError(valuesErrors[0])

  dispatch(setLogin({ prop: 'errors', value: errors }))
}
