// components
import PrivateRouter from '@/includes/PrivateRouter'
import HomeContainer from '@/modules/home/views/HomeContainer'

export default function Home() {
	return (
		<PrivateRouter>
			<HomeContainer />
		</PrivateRouter>
	)
}
