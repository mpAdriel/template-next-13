import { useEffect } from 'react'

// resources
import { initI18N } from '@/i18n/i18n'
// components
import PrivateRouter from '@/includes/PrivateRouter'
import HomeContainer from '@/modules/home/views/HomeContainer'

export default function Home() {
	useEffect(() => {
		initI18N('es')
	}, [])

	return (
		<PrivateRouter>
			<HomeContainer />
		</PrivateRouter>
	)
}
