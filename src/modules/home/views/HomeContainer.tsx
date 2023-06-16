import React from 'react'
import Link from 'next/link'

// components
import RootLayout from '@/includes/RootLayout'
// resources
import { Routing } from '@/router/routing'

const HomeContainer = () => {
	return (
		<RootLayout>
			<Link className="btn btn-primary p-3 px-5" href={Routing.login}>
				Login
			</Link>
		</RootLayout>
	)
}

export default HomeContainer
