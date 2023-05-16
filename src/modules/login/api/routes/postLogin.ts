
import { api } from '@/modules/api/api'

// interfaces
import { TDispatch } from '@/modules/store/interfaces/TDispatch'
import { TStore } from '@/modules/store/interfaces/TStore'
import { IGetUser, UrlPostLogin } from '../interfaces/GetUser'
// actions
import { setLogin } from '../../slices/LoginSlice'
import { loginValidation } from '../../slices/actions/loginValidation'
// resources
import { isDev } from '@/utils/isDev'

export const apiPostLogin = () => async (dispatch: TDispatch, getState: TStore) => {
  const { isError } = await dispatch(loginValidation())
  if (isError) return

  await dispatch(setLogin({ prop: 'isLoading', value: true }))
  await api<IGetUser>(
    {
      verb: 'GET',
      configVerb: { url: UrlPostLogin.replace('<userId>', '1') },
      callback: {
        success: async (response) => {
          if (isDev()) console.log('apiPostLogin - Success', response)
          dispatch(setLogin({ prop: 'email', value: response?.email }))
          await dispatch(setLogin({ prop: 'isLoading', value: false }))
          // setTimeout(() => {
          //   setInterval(async () => {
          //     await dispatch(apiPostRefreshToken())
          //   }, 60000)
          // }, 60000)
        },
        error: async (response) => {
          if (isDev()) console.log('apiPostLogin - Error', response)
          await dispatch(setLogin({ prop: 'isLoading', value: false }))
        }
      },
      dispatch,
      getState
    }
  )
}
