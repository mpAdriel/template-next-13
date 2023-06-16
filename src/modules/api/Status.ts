import { AxiosResponse } from 'axios'

// actions
import { api } from './api'
import { apiPostRefreshToken } from '../login/api'
// interfaces
import { IApi } from './interfaces'
import { parseDataFromAPI } from '@/utils'
import { ETags } from './enum'

export default async function Status<T, D>(
	response: AxiosResponse<T>,
	apiProps: IApi<T, D | undefined>
) {
	const { callback, tag, verb, configVerb, dispatch, getState } = apiProps
	const parsedResponse = parseDataFromAPI<T>(response.data)

	switch (response.status) {
		case 200:
		case 201:
		case 204:
			await callback.success(parsedResponse)
			break

		case 400:
			await callback.error(response.data)
			break

		case 401:
			if (tag === ETags.REFRESH_TOKEN) break
			await dispatch(
				apiPostRefreshToken({
					success: async () =>
						await api({
							verb,
							configVerb,
							callback,
							dispatch,
							getState,
							tag: ETags.FROM_REFRESH_TOKEN,
						}),
					error: () => console.error('Failed to refresh token'),
				})
			)
			break

		case 402:
			break

		case 403:
			await callback.error(response.data)
			break

		case 404:
			await callback.error(response.data)
			break

		default:
			// launch toast with "react-hot-toast"
			break
	}
}
