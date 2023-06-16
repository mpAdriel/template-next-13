import { useDispatch } from 'react-redux'

// interfaces
import { TAppDispatch } from './interfaces'

export const useActions: () => TAppDispatch = useDispatch
