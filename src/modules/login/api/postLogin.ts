
import { get } from '@/modules/api/get'

// interfaces
import { TypeDispatch } from '@/modules/store/Interfaces'
import { ResponseJSONPlaceholder } from './Interfaces'
// actions
import { setLogin } from '../slices/LoginSlice'

export const apiPostLogin = () => async (dispatch: TypeDispatch) => {
  await get<ResponseJSONPlaceholder>(
    {
      url: 'https://jsonplaceholder.typicode.com/users/1'
    },
    {
      success: (response) => {
        console.log('apiPostLogin - Success', response)
        dispatch(setLogin({ prop: 'email', value: response.email }))
      },
      error: (response) => console.log('apiPostLogin - Error', response)
    })
}
