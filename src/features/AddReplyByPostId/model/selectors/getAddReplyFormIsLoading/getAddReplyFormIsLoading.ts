import { RootState } from 'app/providers/StoreProvider'

export const getAddReplyFormIsLoading = (state: RootState) => state?.addReplyForm?.isLoading || false