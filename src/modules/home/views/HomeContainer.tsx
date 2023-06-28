import React from 'react'
import Link from 'next/link'

// components
import RootLayout from '@/includes/RootLayout'
// resources
import { Routing } from '@/router/routing'

const HomeContainer = () => {
	return (
		<RootLayout>
			<div className="d-grid gap-2">
				<Link className="btn btn-primary p-3 px-5" href={Routing.login}>
					Login
				</Link>
				<Link className="btn btn-info p-3 px-5" href={Routing.example}>
					Example
				</Link>
			</div>
		</RootLayout>
	)
}

export default HomeContainer
