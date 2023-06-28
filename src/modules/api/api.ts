import axios, { AxiosResponse } from 'axios'

// interfaces
import { IApi } from './interfaces'
import { EVerbs } from './enum'
// resources
import Status from './Status'
import { isDev, parseDataToAPI, parseObjectToFilter } from '@/utils'
import { hasPermissions } from '../user/utils'

export const api = async <T, D>(props: IApi<T, D | undefined>) => {
	const {
		verb,
		requestConfig,
		callback,
		setLoading,
		permissions = [],
		getState,
		filter,
	} = props
	let { url, config } = requestConfig

	if (permissions) {
		const userPermissions = getState().UserState.userData.permissions
		const canRequest = hasPermissions(userPermissions, permissions)
		if (!canRequest) {
			// launch toast
			if (isDev()) {
				console.error(
					`403 - You do not have ${permissions.join(', ')} permission`
				)
			}
			return
		}
	}

	if (filter) {
		const params = parseObjectToFilter(filter)

		if (params.length > 0) url += '?' + params
	}

	if (setLoading) await setLoading(true)

	const accessToken = getState().UserState.accessToken
	// config url and headers
	if (!config?.baseURL) url = `api/${process.env.VERSION_API}/` + url
	config = {
		baseURL: process.env.BASE_URL_API || '',
		headers: {
			Authorization: `Bearer ${accessToken}`,
			'Content-Type': 'application/json',
		},
		...config,
	}
	if (requestConfig.noneAuth) delete config.headers?.Authorization

	const fSuccess = async (response: AxiosResponse<T>) => {
		if (isDev()) console.warn(`${url} => Response`, response)
		await Status<T, D>(response, props)
		if (setLoading) await setLoading(false)
	}

	const fError = async (error: any) => {
		if (isDev()) console.error(`${url} => Error`, error)
		await callback.error(error)
		if (setLoading) await setLoading(false)
	}

	// remember ".finally(function(){})"

	const body = parseDataToAPI(requestConfig.data) as D

	if (verb === EVerbs.GET) {
		await axios
			.get(url, {
				data: body,
				...config,
			})
			.then(async function (response) {
				await fSuccess(response)
			})
			.catch(async function (error) {
				await fError(error)
			})
	} else if (verb === EVerbs.POST) {
		await axios
			.post(url, body, config)
			.then(async function (response) {
				await fSuccess(response)
			})
			.catch(async function (error) {
				await fError(error)
			})
	} else if (verb === EVerbs.PUT) {
		await axios
			.put(url, body, config)
			.then(async function (response) {
				await fSuccess(response)
			})
			.catch(async function (error) {
				await fError(error)
			})
	} else if (verb === EVerbs.DEL) {
		await axios
			.delete(url, {
				data: body,
				...config,
			})
			.then(async function (response) {
				await fSuccess(response)
			})
			.catch(async function (error) {
				await fError(error)
			})
	} else if (verb === EVerbs.PATCH) {
		await axios
			.patch(url, body, config)
			.then(async function (response) {
				await fSuccess(response)
			})
			.catch(async function (error) {
				await fError(error)
			})
	}
}
