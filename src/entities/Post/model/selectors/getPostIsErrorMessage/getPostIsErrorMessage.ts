import { RootState } from 'app/providers/StoreProvider'

export const getPostIsErrorMessage = (state: RootState) => state?.post?.isErrorMessage || undefined