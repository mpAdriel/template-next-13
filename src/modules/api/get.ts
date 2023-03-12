import axios from 'axios'

// interfaces
import { TypeCallBack, TypeGet } from './Interfaces'

export const get = <T>(prop: TypeGet, callback: TypeCallBack<T>) => {
  const { url, config } = prop

  axios.get(url, config)
    .then(function (response) {
      // handle success
      console.warn(`${url} => Response`, response)
      callback.success(response.data)
      // to callbackerror switch status
    })
    .catch(function (error) {
      // handle error
      console.error(`${url} => Error`, error)
    })
    .finally(function () {
      // always executed
    })
}
