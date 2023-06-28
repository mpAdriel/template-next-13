// api
import { apiGetExample, apiPostExample, apiDelExample } from '../api'
// components
import RootLayout from '@/includes/RootLayout'
// resources
import { useActions, useStore } from '@/modules/store'

const ExampleContainer = () => {
	const { isLoadingGet, isLoadingPost, isLoadingDel } = useStore(
		store => store.ExampleState
	)
	const dispatch = useActions()

	return (
		<RootLayout>
			<div className="d-grid gap-2">
				<button
					className={`btn btn-success p-3 px-5 ${
						isLoadingGet ? 'disabled btn-loader' : ''
					}`}
					onClick={() => dispatch(apiGetExample())}
				>
					<span className="btn-text">GET</span>
				</button>
				<button
					className={`btn btn-primary p-3 px-5 ${
						isLoadingPost ? 'disabled btn-loader' : ''
					}`}
					onClick={() => dispatch(apiPostExample())}
				>
					<span className="btn-text">POST</span>
				</button>
				<button
					className={`btn btn-danger p-3 px-5 ${
						isLoadingDel ? 'disabled btn-loader' : ''
					}`}
					onClick={() => dispatch(apiDelExample())}
				>
					<span className="btn-text">DEL</span>
				</button>
			</div>
		</RootLayout>
	)
}

export default ExampleContainer
