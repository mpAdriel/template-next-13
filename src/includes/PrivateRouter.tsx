import { Routes } from '@/router/routes'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function PrivateRouter({
	children,
}: {
	children: React.ReactElement
}) {
	const router = useRouter()
	const { route } = router

	const routes = Object.entries(Routes)
	const thisRoute = routes.find(item => item[1].path === route)

	const auth = false

	useEffect(() => {
		if (thisRoute && thisRoute[1].auth && !auth) {
			router.push(Routes.LOGIN.path)
		}
	}, [thisRoute, auth, router])

	return <>{children}</>
}
