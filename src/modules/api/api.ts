import axios, { AxiosResponse } from 'axios'

// interfaces
import { IApi } from './interfaces/IApi'
// resources
import Status from './Status'
import { isDev } from '@/utils/isDev'

export const api = async <T>(props: IApi<T>) => {
  const { verb, configVerb, callback } = props
  let { url, config } = configVerb
  const accessToken = '' // catch from corresponding slice

  if (config?.headers === undefined) {
    config = {
      ...config,
      baseURL: process.env.BASE_URL_API || '',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }
  }

  const fSuccess = async (response: AxiosResponse<T>) => {
    if (isDev()) console.warn(`${url} => Response`, response)
    await Status(response, props)
  }

  const fError = async (error: any) => {
    if (isDev()) console.error(`${url} => Error`, error)
    await callback.error(error)
  }

  // remember ".finally(function(){})"

  if (verb === 'GET') {
    await axios.get(url, config)
      .then(async function (response) {
        await fSuccess(response)
      })
      .catch(async function (error) {
        await fError(error)
      })
  } else if (verb === 'POST') {
    await axios.post(url, config)
      .then(async function (response) {
        await fSuccess(response)
      })
      .catch(async function (error) {
        await fError(error)
      })
  } else if (verb === 'PUT') {
    await axios.put(url, config)
      .then(async function (response) {
        await fSuccess(response)
      })
      .catch(async function (error) {
        await fError(error)
      })
  } else if (verb === 'DEL') {
    await axios.delete(url, config)
      .then(async function (response) {
        await fSuccess(response)
      })
      .catch(async function (error) {
        await fError(error)
      })
  } else if (verb === 'PATCH') {
    await axios.patch(url, config)
      .then(async function (response) {
        await fSuccess(response)
      })
      .catch(async function (error) {
        await fError(error)
      })
  }
}
