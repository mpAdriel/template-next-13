import axios, { AxiosResponse } from 'axios'

// interfaces
import { IApi } from './interfaces'
// resources
import Status from './Status'
import { isDev, parseDataToAPI } from '@/utils'
import { hasPermissions } from '../user/utils'

export const api = async <T, D>(props: IApi<T, D | undefined>) => {
	const {
		verb,
		configVerb,
		callback,
		setLoading,
		permissions = [],
		getState,
	} = props
	let { url, config } = configVerb

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

	if (setLoading) await setLoading(true)

	const accessToken = '' // catch from corresponding slice
	if (config?.headers === undefined) {
		config = {
			...config,
			baseURL: process.env.BASE_URL_API || '',
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
		}
	}

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

	const body = parseDataToAPI(configVerb.data) as D

	if (verb === 'GET') {
		await axios
			.get(url, config)
			.then(async function (response) {
				await fSuccess(response)
			})
			.catch(async function (error) {
				await fError(error)
			})
	} else if (verb === 'POST') {
		await axios
			.post(url, body, config)
			.then(async function (response) {
				await fSuccess(response)
			})
			.catch(async function (error) {
				await fError(error)
			})
	} else if (verb === 'PUT') {
		await axios
			.put(url, config)
			.then(async function (response) {
				await fSuccess(response)
			})
			.catch(async function (error) {
				await fError(error)
			})
	} else if (verb === 'DEL') {
		await axios
			.delete(url, config)
			.then(async function (response) {
				await fSuccess(response)
			})
			.catch(async function (error) {
				await fError(error)
			})
	} else if (verb === 'PATCH') {
		await axios
			.patch(url, config)
			.then(async function (response) {
				await fSuccess(response)
			})
			.catch(async function (error) {
				await fError(error)
			})
	}
}
