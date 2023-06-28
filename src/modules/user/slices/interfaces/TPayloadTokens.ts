import { PayloadAction } from '@reduxjs/toolkit'

// interfaces
import { TokensDTO } from '@/modules/api/modules/login/res'

export type TPayloadTokens = PayloadAction<TokensDTO>
