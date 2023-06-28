// resources
import PrivateRouter from '@/includes/PrivateRouter'
// views
import ExampleContainer from '@/modules/example/views/ExampleContainer'

export default function Example() {
	return (
		<PrivateRouter>
			<ExampleContainer />
		</PrivateRouter>
	)
}
