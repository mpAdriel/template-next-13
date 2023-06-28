import { Routing } from './routing'

interface IRoutes {
	[key: string]: { path: string; auth: boolean }
}

export const Routes: IRoutes = {
	HOME: { path: Routing.home, auth: false },
	LOGIN: { path: Routing.login, auth: false },
	EXAMPLE: { path: Routing.example, auth: false },
}
