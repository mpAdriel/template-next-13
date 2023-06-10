import { PayloadAction } from '@reduxjs/toolkit'

export type TPayloadSetData = PayloadAction<{ prop: string; value: any }>
