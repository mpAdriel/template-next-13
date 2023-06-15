// interfaces
import { TDispatch } from '@/modules/store/interfaces/TDispatch'
import { TStore } from '@/modules/store/interfaces/TStore'
import { EModules } from '@/modules/api/enum/EModules'
import { EVerbs } from '@/modules/api/enum/EVerbs'
import { IPostUserDTO } from '@/modules/api/dto/user/IPostUserDTO'
import { IPostResUserDTO } from '@/modules/api/dto/user/IPostResUserDTO'
// actions
import { setLogin } from '../slices/LoginSlice'
import { loginValidation } from '../slices/actions/loginValidation'
// resources
import { api } from '@/modules/api/api'
import { isDev } from '@/utils'

export const apiPostLogin =
	() => async (dispatch: TDispatch, getState: TStore) => {
		const { isError } = await dispatch(loginValidation())
		if (isError) return

		await api<IPostResUserDTO, IPostUserDTO>({
			verb: EVerbs.POST,
			configVerb: {
				url: 'posts',
				data: {
					body: 'This is my new post',
					title: 'New post',
					userId: 1,
				},
			},
			permissions: ['MANAGE_PYMES'],
			callback: {
				success: async response => {
					if (isDev()) console.log('apiPostLogin - Success', response)
				},
				error: async response => {
					if (isDev()) console.log('apiPostLogin - Error', response)
				},
			},
			setLoading: async status =>
				await dispatch(setLogin({ prop: 'isLoading', value: status })),
			dispatch,
			getState,
			module: EModules.LOGIN,
		})
	}
