import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

interface IEnv {
	mode: 'development' | 'production'
}

export default (env: IEnv) => {

	const mode = env.mode || 'development'
	const isDev = mode === 'development'

	const config: webpack.Configuration = {
		mode,
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].[contenthash:8].js',
			clean: true
		},
		module: {
			rules: [
				{
					test: /\.svg$/i,
					issuer: /\.[jt]sx?$/,
					use: ['@svgr/webpack'],
				},
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.s[c]ss$/i,
					use: [
						isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								modules: {
									auto: (resPath: string) => Boolean(resPath.includes('.module.')),
									localIdentName: isDev ? '[path][name]__[hash:base64:5]' : '[hash:base64:5]'
								},
							}
						},
						'sass-loader',
					]
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
			modules: [path.resolve(__dirname, 'src'), 'node_modules'],
			preferAbsolute: true,
			mainFiles: ['index'],
			alias: {}
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'public', 'index.html')
			}),
			new MiniCssExtractPlugin(),
			new webpack.DefinePlugin({ __IS_DEV__: JSON.stringify(isDev) }),
			new webpack.ProgressPlugin()
		],
		devtool: 'inline-source-map',
		devServer: {
			port: 3000,
			open: true,
			historyApiFallback: true
		}
	}


	return config
}
