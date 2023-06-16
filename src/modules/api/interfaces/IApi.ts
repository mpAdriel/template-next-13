// interfaces
import { TDispatch, TStore } from '@/modules/store/interfaces'
import { ICallBack, IRequestConfig } from './'
import { ETags, EVerbs } from '../enum'

export interface IApi<T, D> {
	verb: EVerbs
	configVerb: IRequestConfig<D>
	callback: ICallBack<T>
	dispatch: TDispatch
	getState: TStore
	tag?: ETags
	setLoading?: (status: boolean) => {}
	permissions?: string[]
	module?: string
}
