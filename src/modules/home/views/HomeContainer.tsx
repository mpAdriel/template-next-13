import React from 'react'
import Link from 'next/link'

// components
import RootLayout from '@/includes/RootLayout'
// resources
import { Routing } from '@/router/routing'

const HomeContainer = () => {
	return (
		<RootLayout>
			<section className="card card-glass">
				<Link className="btn btn-dark btn-glow p-3 px-5" href={Routing.login}>
					Go to login
				</Link>
			</section>
		</RootLayout>
	)
}

export default HomeContainer
