import { RootState } from 'app/providers/StoreProvider'

export const getAddReplyFormParagraph = (state: RootState) => state?.addReplyForm?.paragraph || ''