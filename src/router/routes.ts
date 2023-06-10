interface IRoutes {
	[key: string]: { path: string; auth: boolean }
}

export const Routes: IRoutes = {
	HOME: { path: '/', auth: false },
	LOGIN: { path: '/login', auth: false },
}
