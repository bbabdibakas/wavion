import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/webpack'

export const buildPlugins = ({ paths, isDev, apiUrl }: BuildOptions): webpack.WebpackPluginInstance[] => {

	return [
		new HtmlWebpackPlugin({
			template: paths.html
		}),
		new MiniCssExtractPlugin(),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__API__: JSON.stringify(apiUrl),
		}),
		new webpack.ProgressPlugin()
	]
}