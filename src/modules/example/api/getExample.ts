// actions
import { setExampleState } from '../slices/ExampleSlice'

// actions
import { api } from '@/modules/api/api'
import { PostDetailDTO } from '@/modules/api/modules/example/res'
// interfaces
import { EModules, EVerbs } from '@/modules/api/enum'
// resources
import { isDev } from '@/utils'
import { TDispatch, TStore } from '@/modules/store/interfaces'

export const apiGetExample =
	() => async (dispatch: TDispatch, getState: TStore) => {
		await api<PostDetailDTO, undefined>({
			callback: {
				error: async response => {
					if (isDev()) console.log('apiGetExample - Error', response)
				},
				success: async response => {
					if (isDev()) console.log('apiGetExample - Success', response)
				},
			},
			dispatch,
			getState,
			moduleName: EModules.EXAMPLE,
			permissions: [],
			requestConfig: {
				config: {
					baseURL: 'https://jsonplaceholder.typicode.com/',
				},
				url: 'posts/1',
			},
			setLoading: async status =>
				await dispatch(
					setExampleState({ prop: 'isLoadingGet', value: status })
				),
			verb: EVerbs.GET,
		})
	}
