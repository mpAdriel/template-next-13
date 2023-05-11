import { useDispatch } from 'react-redux'

// interfaces
import { TAppDispatch } from './interfaces/TAppDispatch'

export const useActions: () => TAppDispatch = useDispatch
