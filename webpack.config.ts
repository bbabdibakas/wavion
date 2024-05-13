import path from 'path'
import { BuildEnv, BuildPaths } from './config/build/types/webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

export default (env: BuildEnv) => {

	const mode = env.mode || 'development'
	const isDev = mode === 'development'
	const port = env.port || 3001
	const apiUrl = 'http://localhost:8000'
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	}

	return buildWebpackConfig({ mode, port, paths, isDev, apiUrl })
}
