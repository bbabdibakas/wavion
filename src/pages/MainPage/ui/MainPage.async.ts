import { lazy } from 'react'

export const MainPageAsync = lazy(()=> new Promise((resolve) => {
	//@ts-expect-error for test
	setTimeout(()=> resolve(import('./MainPage')), 1500)
}))