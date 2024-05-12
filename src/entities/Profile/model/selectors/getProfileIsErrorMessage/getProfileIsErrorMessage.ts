import { RootState } from 'app/providers/StoreProvider'

export const getProfileIsErrorMessage = (state: RootState) => state?.profile?.isErrorMessage || undefined