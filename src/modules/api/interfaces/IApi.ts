// interfaces
import { TDispatch } from '@/modules/store/interfaces/TDispatch'
import { ICallBack } from './ICallback'
import { IRequestConfig } from './IRequestConfig'
import { TStore } from '@/modules/store/interfaces/TStore'
import { ETags } from '../enum/ETags'
import { EVerbs } from '../enum/EVerbs'

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
