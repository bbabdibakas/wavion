import { RootState } from 'app/providers/StoreProvider'

export const getPostPageIsLoading = (state: RootState) => state?.postPage?.isLoading || false