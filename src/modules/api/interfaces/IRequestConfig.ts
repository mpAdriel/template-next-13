import { AxiosRequestConfig } from 'axios'

export interface IRequestConfig<D> {
	url: string
	data?: D
	noneAuth?: boolean
	config?: AxiosRequestConfig<any>
}
