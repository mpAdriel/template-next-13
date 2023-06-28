import { AxiosResponse } from 'axios'

// actions
import { api } from './api'
import { apiPostRefreshToken } from '../auth/api'
import { shutdown } from '../app/slices/actions'
// interfaces
import { IApi } from './interfaces'
import { parseDataFromAPI } from '@/utils'
import { EModules, ETags } from './enum'

export default async function Status<T, D>(
	response: AxiosResponse<T>,
	apiProps: IApi<T, D | undefined>
) {
	const { callback, tag, verb, requestConfig, dispatch, getState, moduleName } =
		apiProps
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
			if (tag === ETags.REFRESH_TOKEN) {
				await dispatch(shutdown())
				break
			}

			if (moduleName === EModules.LOGIN) {
				await callback.error(response.data)
				break
			}

			await dispatch(
				apiPostRefreshToken({
					error: () => console.error('Failed to refresh token'),
					success: async () =>
						await api({
							callback,
							dispatch,
							getState,
							requestConfig,
							tag: ETags.FROM_REFRESH_TOKEN,
							verb,
						}),
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
