
import { api } from '@/modules/api/api'

// interfaces
import { ICallBack } from '@/modules/api/interfaces/ICallback'
import { TStore } from '@/modules/store/interfaces/TStore'
import { TDispatch } from '@/modules/store/interfaces/TDispatch'
import { IGetUser, UrlPostLogin } from '../interfaces/GetUser'
// actions
import { setLogin } from '../../slices/LoginSlice'

export const apiPostRefreshToken = <T>(callback?: ICallBack<T>) => async (dispatch: TDispatch, getState: TStore) => {
  await dispatch(setLogin({ prop: 'isLoading', value: true }))
  await api<IGetUser>(
    {
      verb: 'GET',
      configVerb: { url: UrlPostLogin.replace('<userId>', '2') },
      callback: {
        success: async (response) => {
          console.log('apiPostRefreshToken - Success', response)
          dispatch(setLogin({ prop: 'email', value: response?.email }))
          await dispatch(setLogin({ prop: 'isLoading', value: false }))
          await callback?.success()
        },
        error: async (response) => {
          console.log('apiPostRefreshToken - Error', response)
          await dispatch(setLogin({ prop: 'isLoading', value: false }))
          await callback?.error()
        }
      },
      dispatch,
      getState,
      tag: 'REFRESH_TOKEN'
    }
  )
}
