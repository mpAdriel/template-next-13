import { toast } from 'react-hot-toast'

// assets
import iconError from '@/assets/icon-error.png'
import iconSuccess from '@/assets/icon-success.png'
import Image, { StaticImageData } from 'next/image'

interface IPropToast {
	iconSrc: StaticImageData
	iconAlt: string
}

export const launchToast = ({
	isError,
	isSuccess,
	isPromise,
	promise,
	msg,
	duration,
}: {
	isError?: boolean
	isSuccess?: boolean
	isPromise?: boolean
	promise?: {
		value: Promise<unknown>
		loading: string
		success: string
		error: string
	}
	msg: string
	duration?: number
}) => {
	const props = {} as IPropToast

	if (isError) {
		props.iconSrc = iconError
		props.iconAlt = 'error'
	} else if (isSuccess) {
		props.iconSrc = iconSuccess
		props.iconAlt = 'success'
	} else if (isPromise && promise) {
		toast.promise(promise.value, {
			loading: promise.loading,
			success: promise.success,
			error: promise.error,
		})
		return
	} else {
		// add prop custom icon
	}
	toast.custom(
		el => (
			<div className="bg-light shadow justify-content-between d-flex align-items-center px-4 py-2 rounded-3">
				<div className="d-flex align-items-center">
					<Image
						src={props.iconSrc}
						alt={props.iconAlt}
						className="rounded-circle"
						height={20}
						width={20}
					/>
					<p className="px-3 m-0" style={{ maxWidth: '210px' }}>
						{msg}
					</p>
				</div>
				<div className="border-start ps-4">
					<div
						onClick={() => {
							toast.remove(el.id)
						}}
						style={{ cursor: 'pointer' }}
					>
						<i className="bi bi-x-lg" />
					</div>
				</div>
			</div>
		),
		{ duration: duration || 3000 }
	)
}
