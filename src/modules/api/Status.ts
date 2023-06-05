import { AxiosResponse } from 'axios'

// actions
import { api } from './api'
import { apiPostRefreshToken } from '../login/api/routes/postRefreshToken'
// interfaces
import { IApi } from './interfaces/IApi'

export default async function Status <T> (response: AxiosResponse<T>, apiProps: IApi<T>) {
  const { callback, tag, verb, configVerb, dispatch, getState } = apiProps

  switch (response.status) {
    case 200:
    case 201:
    case 204:
      await callback.success(response.data)
      break

    case 400:
      await callback.error(response.data)
      break

    case 401:
      if (tag === 'REFRESH_TOKEN') break
      await dispatch(apiPostRefreshToken({
        success: async () => await api({
          verb,
          configVerb,
          callback,
          dispatch,
          getState,
          tag: 'FROM_REFRESH_TOKEN'
        }),
        error: () => console.error('Failed to refresh token')
      }))
      break

    case 402:
      break

    case 403:
      await callback.error(response.data)
      break

    case 404:
      await callback.error(response.data)
      break

    default:
      // launch toast with "react-hot-toast"
      break
  }
}
