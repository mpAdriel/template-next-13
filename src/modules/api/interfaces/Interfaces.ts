import { AxiosRequestConfig } from 'axios'

export type TVerbs = 'GET' | 'POST' | 'PUT' | 'DEL' | 'PATCH'

export interface IGet {
	url: string
	config?: AxiosRequestConfig<any> | undefined
}

export interface IPost {
	url: string
	data?: any
	config?: AxiosRequestConfig<any> | undefined
}

export interface IDelete {
	url: string
	config?: AxiosRequestConfig<any> | undefined
}

export interface IPut {
	url: string
	data?: any
	config?: AxiosRequestConfig<any> | undefined
}

export interface IPatch {
	url: string
	data?: any
	config?: AxiosRequestConfig<any> | undefined
}

export type TIVerbs = IGet | IPost | IPut | IDelete | IPatch
