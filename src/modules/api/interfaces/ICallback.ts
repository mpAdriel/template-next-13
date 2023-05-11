export interface ICallBack<T> {
  success: (response?: T) => any
  error: (response?: T | any) => any
}
