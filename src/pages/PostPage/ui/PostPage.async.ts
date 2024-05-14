import { lazy } from 'react'

export const PostPageAsync = lazy(()=> new Promise((resolve) => {
	//@ts-expect-error for test
	setTimeout(()=> resolve(import('./PostPage')), 1500)
}))