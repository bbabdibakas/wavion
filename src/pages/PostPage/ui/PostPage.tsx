import { PostDetails } from "entities/Post"
import { useParams } from "react-router-dom"

const PostPage = () => {
	const { id } = useParams<{ id: string }>()

	return (
		<div>
			<PostDetails id={id} />
		</div>
	)
}

export default PostPage