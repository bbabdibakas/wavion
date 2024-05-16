import { RootState } from 'app/providers/StoreProvider'

export const getAddReplyFormIsErrorMessage = (state: RootState) => state?.addReplyForm?.isErrorMessage || undefined