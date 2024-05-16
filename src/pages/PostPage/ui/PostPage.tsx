import { PostDetails, PostList } from "entities/Post"
import { useParams } from "react-router-dom"
import { DynamicModuleLoader, ReducersList } from "shared/lib/DynamicModuleLoader/DynamicModuleLoader"
import { getRepliesData, postPageReducer } from "../model/slice/postPageSlice"
import { useAppDispatch } from "shared/lib/useAppDispatch/useAppDispatch"
import { useSelector } from "react-redux"
import { getPostPageIsErrorMessage } from "../model/selectors/getPostPageIsErrorMessage/getPostPageIsErrorMessage"
import { getPostPageIsLoading } from "../model/selectors/getPostPageIsLoading/getPostPageIsLoading"
import { useEffect } from "react"
import { fetchPostsDataByPostId } from "../model/services/fetchPostsDataByPostId"

const initialReducers: ReducersList = {
	postPage: postPageReducer
}

const PostPage = () => {
	const { id } = useParams<{ id: string }>()

	const dispatch = useAppDispatch()
	const postsData = useSelector(getRepliesData.selectAll)
	const isLoading = useSelector(getPostPageIsLoading)
	const isErrorMessage = useSelector(getPostPageIsErrorMessage)


	useEffect(() => {
		dispatch(fetchPostsDataByPostId(id))
	}, [dispatch, id])

	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
			<PostDetails id={id} />
			<PostList
				posts={postsData}
				isLoading={isLoading}
				isErrorMessage={isErrorMessage}
			/>
		</DynamicModuleLoader>
	)
}

export default PostPage