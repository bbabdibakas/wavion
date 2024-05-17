import { getAddReplyFormIsErrorMessage } from 'features/AddReplyByPostId/model/selectors/getAddReplyFormIsErrorMessage/getAddReplyFormIsErrorMessage'
import { getAddReplyFormIsLoading } from 'features/AddReplyByPostId/model/selectors/getAddReplyFormIsLoading/getAddReplyFormIsLoading'
import { getAddReplyFormParagraph } from 'features/AddReplyByPostId/model/selectors/getAddReplyFormParagraph/getAddReplyFormParagraph'
import { addReplyFormActions, addReplyFormReducer } from 'features/AddReplyByPostId/model/slice/addReplyFormSlice'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/useAppDispatch/useAppDispatch'
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import cls from './AddReplyForm.module.scss'
import { AppLoader } from 'shared/ui/AppLoader/AppLoader'
import { addReplyByPostId } from 'features/AddReplyByPostId/model/services/addReplyByPostId/addReplyByPostId'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppTextArea } from 'shared/ui/AppTextArea/AppTextArea'

export interface AddReplyFormProps {
	className?: string
}

const initialReducers: ReducersList = {
	addReplyForm: addReplyFormReducer
}

export const AddReplyForm = ({ className }: AddReplyFormProps) => {
	const dispatch = useAppDispatch()

	const paragraph = useSelector(getAddReplyFormParagraph)
	const isLoading = useSelector(getAddReplyFormIsLoading)
	const isErrorMessage = useSelector(getAddReplyFormIsErrorMessage)

	const onChangeParagraph = useCallback((value: string) => {
		if (value.split('\n').length < 10) {
			dispatch(addReplyFormActions.onSetParagraph(value))
		}
	}, [dispatch])

	const onAddReply = useCallback(async () => {
		await dispatch(addReplyByPostId(paragraph))
	}, [dispatch, paragraph])

	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
			<div className={classNames(cls.AddReplyForm, [className])}>
				<AppTextArea value={paragraph} onChange={onChangeParagraph} placeholder='Reply' />
				<AppButton
					onClick={onAddReply}
					theme={AppButtonTheme.PRIMARY}
					disabled={isLoading}
					className={cls.button}
				>
					Reply
					{isLoading && <AppLoader />}
				</AppButton>
			</div>
			{isErrorMessage}
		</DynamicModuleLoader>
	)
}