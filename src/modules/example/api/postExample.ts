// actions
import { setExampleState } from '../slices/ExampleSlice'

// actions
import { api } from '@/modules/api/api'
import { PostDetailDTO } from '@/modules/api/modules/example/res'
import { CreatePostDTO } from '@/modules/api/modules/example/req'
// interfaces
import { EModules, EVerbs } from '@/modules/api/enum'
// resources
import { isDev } from '@/utils'
import { TDispatch, TStore } from '@/modules/store/interfaces'

export const apiPostExample =
	() => async (dispatch: TDispatch, getState: TStore) => {
		await api<PostDetailDTO, CreatePostDTO>({
			callback: {
				error: async response => {
					if (isDev()) console.log('apiPostExample - Error', response)
				},
				success: async response => {
					if (isDev()) console.log('apiPostExample - Success', response)
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
				data: {
					body: 'This is a new post',
					title: 'Title',
					userId: 1,
				},
				url: 'posts',
			},
			setLoading: async status =>
				await dispatch(
					setExampleState({ prop: 'isLoadingPost', value: status })
				),
			verb: EVerbs.POST,
		})
	}
