import { TypedUseSelectorHook, useSelector } from 'react-redux'

// interfaces
import { TRootState } from './interfaces'

export const useStore: TypedUseSelectorHook<TRootState> = useSelector
