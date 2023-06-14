// interfaces
import { TDispatch } from '@/modules/store/interfaces/TDispatch'
import { ICallBack } from './ICallback'
import { TIVerbs, EVerbs } from './Interfaces'
import { ETags } from './ETags'
import { TStore } from '@/modules/store/interfaces/TStore'

export interface IApi<T> {
	verb: EVerbs
	configVerb: TIVerbs
	callback: ICallBack<T>
	dispatch: TDispatch
	getState: TStore
	tag?: ETags
	setLoading?: (status: boolean) => {}
	permission?: { value: boolean; permission: string }
	module?: string
}
