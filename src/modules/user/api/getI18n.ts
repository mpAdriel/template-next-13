// interfaces
import { EVerbs } from '@/modules/api/enum'
import { TDispatch, TStore } from '@/modules/store/interfaces'
// resources
import { api } from '@/modules/api/api'
import { isDev } from '@/utils'

export const apiGetI18n =
	() => async (dispatch: TDispatch, getState: TStore) => {
		await api<{}, undefined>({
			callback: {
				error: async response => {
					if (isDev()) console.log('apiGetI18n - Error', response)
				},
				success: async response => {
					if (isDev()) console.log('apiGetI18n - Success', response)
				},
			},
			dispatch,
			getState,
			permissions: [],
			requestConfig: {
				url: 'i18n',
			},
			verb: EVerbs.GET,
		})
	}
