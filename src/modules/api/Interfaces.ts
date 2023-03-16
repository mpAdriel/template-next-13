import { AxiosRequestConfig } from 'axios'

// interfaces
import { TDispatch, TStore } from '../store/Interfaces'

export type TVerbs = 'GET' | 'POST' | 'PUT' | 'DEL' | 'PATCH'

export interface IGet {
  url: string,
  config?: AxiosRequestConfig<any> | undefined
}

export interface IPost {
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any> | undefined
}

export interface IDelete {
  url: string,
  config?: AxiosRequestConfig<any> | undefined
}

export interface IPut {
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any> | undefined
}

export interface IPatch {
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any> | undefined
}

export type TIVerbs = IGet | IPost | IPut | IDelete | IPatch

export interface ICallBack<T> {
  success: (response?: T) => any
  error: (response?: T | any) => any
}

export type TTags =
  'ANY' | 'REFRESH_TOKEN' | 'FROM_REFRESH_TOKEN'

export interface IApi<T> {
    verb: TVerbs,
    configVerb: TIVerbs,
    callback: ICallBack<T>,
    dispatch: TDispatch, getState: TStore,
    tag?: TTags
  }
