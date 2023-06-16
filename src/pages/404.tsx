import React from 'react'
import Link from 'next/link'

// components
import RootLayout from '@/includes/RootLayout'
import { Routing } from '@/router/routing'

export default function NotFound() {
	// const router = useRouter()

	// useEffect(() => {
	// router.replace(Routing.home)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [])

	return (
		<RootLayout title="404 Not Found">
			<section
				className="card mx-3 d-flex justify-content-center align-items-center"
				style={{ maxWidth: '500px' }}
			>
				<h2>🤕 404 🤕</h2>
				<h4>¿Te perdiste?</h4>
				<Link className="btn btn-primary p-3 px-5 mt-3" href={Routing.home}>
					Vuelve al inicio
				</Link>
			</section>
		</RootLayout>
	)
}
