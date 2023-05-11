import { TypedUseSelectorHook, useSelector } from 'react-redux'

// interfaces
import { TRootState } from './interfaces/TRootState'

export const useStore: TypedUseSelectorHook<TRootState> = useSelector
