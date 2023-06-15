import { AxiosRequestConfig } from 'axios'

export interface IRequestConfig<D> {
	url: string
	data?: D
	config?: AxiosRequestConfig<any>
}
