import { RootState } from 'app/providers/StoreProvider'

export const getPostPageIsErrorMessage = (state: RootState) => state?.postPage?.isErrorMessage || undefined