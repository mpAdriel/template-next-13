import { toast } from 'react-hot-toast'

export const launchPromiseToast = async (promise: {
	value: Promise<unknown>
	loading: string
	success: string
	error: string
}) => {
	await toast.promise(promise.value, {
		loading: promise.loading,
		success: promise.success,
		error: promise.error,
	})
}
