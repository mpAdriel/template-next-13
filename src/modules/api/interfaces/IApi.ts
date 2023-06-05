// interfaces
import { TDispatch } from '@/modules/store/interfaces/TDispatch'
import { ICallBack } from './ICallback'
import { TIVerbs, TVerbs } from './Interfaces'
import { TTags } from './TTags'
import { TStore } from '@/modules/store/interfaces/TStore'

export interface IApi<T> {
  verb: TVerbs,
  configVerb: TIVerbs,
  callback: ICallBack<T>,
  dispatch: TDispatch, getState: TStore,
  tag?: TTags,
  setLoading?: (status: boolean) => {},
  permission?: {value: boolean, permission: string}
}
