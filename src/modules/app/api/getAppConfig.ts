// actions
import { setApp } from '../slices/AppSlice'

// actions
import { api } from '@/modules/api/api'
// interfaces
import { EModules, EVerbs } from '@/modules/api/enum'
// resources
import { isDev } from '@/utils'
import { TDispatch, TStore } from '@/modules/store/interfaces'

export const apiGetAppConfig =
	() => async (dispatch: TDispatch, getState: TStore) => {
		await api<{ data: object; status: string }, undefined>({
			callback: {
				error: async response => {
					if (isDev()) console.log('apiGetAppConfig - Error', response)
				},
				success: async response => {
					if (isDev()) console.log('apiGetAppConfig - Success', response)
					await dispatch(setApp({ prop: 'config', value: response?.data }))
				},
			},
			dispatch,
			getState,
			moduleName: EModules.APP,
			permissions: [],
			requestConfig: {
				url: 'app/config',
			},
			setLoading: async status =>
				await dispatch(setApp({ prop: 'isLoadingApp', value: status })),
			verb: EVerbs.GET,
		})
	}
