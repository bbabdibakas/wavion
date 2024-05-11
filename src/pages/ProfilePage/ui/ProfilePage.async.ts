import { lazy } from 'react'

export const ProfilePageAsync = lazy(()=> new Promise((resolve) => {
	//@ts-expect-error for test
	setTimeout(()=> resolve(import('./ProfilePage')), 1500)
}))