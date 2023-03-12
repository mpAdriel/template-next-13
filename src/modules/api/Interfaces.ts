import { AxiosRequestConfig } from 'axios'

export type TypeVerbs = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DEL: 'DEL',
  PATCH: 'PATCH',
}

export type TypeGet = {
  url: string,
  config?: AxiosRequestConfig<any> | undefined
}

export type TypePost = {
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any> | undefined
}

export type TypeDelete = {
  url: string,
  config?: AxiosRequestConfig<any> | undefined
}

export type TypePut = {
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any> | undefined
}

export type TypePatch = {
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any> | undefined
}

export type TypeCallBack<T> = {
  success: (response: T) => any
  error: (response: T) => any
}
