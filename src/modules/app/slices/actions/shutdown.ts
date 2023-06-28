import { TDispatch } from '@/modules/store/interfaces'

export const shutdown = () => async (dispatch: TDispatch) => {
	await dispatch({ type: 'RESET_STORE' })
}
