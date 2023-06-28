// actions
import { setExampleState } from '../slices/ExampleSlice'

// actions
import { api } from '@/modules/api/api'
// interfaces
import { EModules, EVerbs } from '@/modules/api/enum'
// resources
import { isDev } from '@/utils'
import { TDispatch, TStore } from '@/modules/store/interfaces'

export const apiDelExample =
	() => async (dispatch: TDispatch, getState: TStore) => {
		await api<{}, undefined>({
			callback: {
				error: async response => {
					if (isDev()) console.log('apiDelExample - Error', response)
				},
				success: async response => {
					if (isDev()) console.log('apiDelExample - Success', response)
				},
			},
			dispatch,
			filter: {
				id: 1,
			},
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
					setExampleState({ prop: 'isLoadingDel', value: status })
				),
			verb: EVerbs.DEL,
		})
	}
