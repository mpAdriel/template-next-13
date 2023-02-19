interface IRoutes { [key: string]: {path: string, auth: boolean}; }

export const Routes:IRoutes = {
  HOME: { path: '/', auth: true },
  LOGIN: { path: '/login', auth: false },
  CART: { path: '/cart', auth: true }
}
