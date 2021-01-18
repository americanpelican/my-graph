/* eslint-disable max-lines */

// version 1
const path = require('path')
const nodeExternals = require('webpack-node-externals')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const electronRendererConfig = {

	target: 'electron-renderer',
	devtool: 'inline-source-map',
	watch: true,
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'ts-loader',
						// exclude: "/node_modules/",
						options: {

							// context: path.resolve(__dirname, 'src')

							// projectReferences: true

						}
					}
				]
			}
		]
	},
	plugins: [new CleanWebpackPlugin()],
	resolve: {
		modules: [
			// path.resolve(__dirname, '..'), // must be placed before 'node modules'
			'node_modules'
		],
		extensions: [
			'.ts',
			// '.tsx',
			'.js',
			'.xml'
		],
		alias: { // use to create module handles that work with Typescript & Webpack

		}

	},
	entry: {

		/*
		 * "standard": './src/ea-tool-standard/.test/suite.spec.ts',
		 * "import-export": './src/ea-tool-import-export/.test/suite.spec.ts',
		 * "jsdom": './src/test/jsdom.spec.ts',
		 * "repository": './src/ea-tool-repository/test/suite.spec.ts',
		 */

		"mocha-renderer": './lib/test/suite.spec.js'

	},

	output: {
		path: path.resolve(__dirname, 'build/test'),
		filename: `[name].electron.bundle.js`
	},
	stats: {

		/*
		 * usedExports: true,
		 * reasons: false,
		 * maxModules: 100
		 */
	},
	watchOptions: {

		/*
		 * ignored: /node_modules/,
		 * poll: 1000 // check for changes every second
		 */

	}
}

const nodeConfig = {

	target: 'node',
	devtool: 'inline-source-map',
	watch: true,
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'ts-loader',
						// exclude: "/node_modules/",
						options: {

							// context: path.resolve(__dirname, 'src')

							// projectReferences: true

						}
					}
				]
			}
		]
	},
	plugins: [new CleanWebpackPlugin()],
	resolve: {
		modules: [
			// path.resolve(__dirname, '..'), // must be placed before 'node modules'
			'node_modules'
		],
		extensions: [
			'.ts',
			// '.tsx',
			'.js',
			'.xml'
		],
		alias: { // use to create module handles that work with Typescript & Webpack

		}

	},
	entry: {

		/*
		 * "standard": './src/ea-tool-standard/.test/suite.spec.ts',
		 * "import-export": './src/ea-tool-import-export/.test/suite.spec.ts',
		 * "jsdom": './src/test/jsdom.spec.ts',
		 * "repository": './src/ea-tool-repository/test/suite.spec.ts',
		 */

		"mocha": './lib/test/suite.spec.js'

	},

	output: {
		path: path.resolve(__dirname, 'build/test'),
		filename: `[name].node.bundle.js`
	},
	stats: {

		/*
		 * usedExports: true,
		 * reasons: false,
		 * maxModules: 100
		 */
	},
	watchOptions: {

		/*
		 * ignored: /node_modules/,
		 * poll: 1000 // check for changes every second
		 */

	},
	externals: [nodeExternals()]

}

const browserConfig = {

	target: 'web',
	devtool: 'inline-source-map',
	watch: true,
	module: {
		rules: [

			/*
			 *{
			 * test: /\.ts$/,
			 * use: [
			 * {
			 * loader: 'ts-loader',
			 * // exclude: "/node_modules/",
			 * options: {
			 *
			 * // context: path.resolve(__dirname, 'src')
			 *
			 * // projectReferences: true
			 *
			 * }
			 * }
			 * ]
			 * }
			 */
		]
	},
	plugins: [
		new CleanWebpackPlugin(),

		/*
		 *new HtmlWebpackPlugin({
		 * title: 'Mocha Test 2',
		 * filename: './webpack.html'
		 *}),
		 */
		// new FaviconsWebpackPlugin('./assets/svg/pyramid.png'), // svg works too!
		new CopyPlugin({
			patterns: [{ from: './assets', to: '' }]
		})
	],
	resolve: {
		modules: [
			// path.resolve(__dirname, '..'), // must be placed before 'node modules'
			'node_modules'
		],
		extensions: [

			/*
			 * '.ts',
			 * '.tsx',
			 */
			'.js',
			'.xml'
		],
		alias: { // use to create module handles that work with Typescript & Webpack

		}
	},
	entry: {
		"browser": './lib/ea-tool-gui/index.js'
	},

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: `[name].bundle.js`
	},
	stats: {
		moduleTrace: false,
		usedExports: true,
		reasons: false,
		maxModules: 100
	},

	watchOptions: {

		/*
		 * ignored: /node_modules/,
		 * poll: 1000 // check for changes every second
		 */

	},

	// webpack-dev-server configuration
	devServer: {
		https: false,
		// Can be omitted unless you are using 'docker'
		host: '0.0.0.0',

		/*
		 * This is where webpack-dev-server serves your bundle
		 * which is created in memory.
		 * To use the in-memory bundle,
		 * your <script> 'src' should point to the bundle
		 * prefixed with the 'publicPath', e.g.:
		 *   <script src='http://localhost:9001/assets/bundle.js'>
		 *   </script>
		 */
		publicPath: '',

		/*
		 * The local filesystem directory where static html files
		 * should be placed.
		 * Put your main static html page containing the <script> tag
		 * here to enjoy 'live-reloading'
		 * E.g., if 'contentBase' is '../views', you can
		 * put 'index.html' in '../views/main/index.html', and
		 * it will be available at the url:
		 *   https://localhost:9001/main/index.html
		 */
		contentBase: path.resolve(__dirname, "./build"),

		/*
		 * 'Live-reloading' happens when you make changes to code
		 * dependency pointed to by 'entry' parameter explained earlier.
		 * To make live-reloading happen even when changes are made
		 * to the static html pages in 'contentBase', add
		 * 'watchContentBase'
		 */
		watchContentBase: true,
		compress: true,
		port: 9001,

		// write assets to disk
		writeToDisk: true

		/*
		 * modules require mime type per HTML specification
		 * mimeTypes: { 'text/html': ['js'] }
		 */

		/*
		 * Suppress warning from mocha: "Critical dependency: the request of a dependency is an expression"
		 * @see https://webpack.js.org/configuration/module/#module-contexts
		 */

	},

	// exprContextCritical: false,

	/*
	 * Suppress fatal error: Cannot resolve module 'fs'
	 * @relative https://github.com/pugjs/pug-loader/issues/8
	 * @see https://github.com/webpack/docs/wiki/Configuration#node
	 */
	node: {
		child_process: 'empty',
		fs: 'empty',
		crypto: 'empty',
		net: 'empty',
		tls: 'empty'
	}

	/*
	 *externals: {
	 * 'mocha': 'mocha',
	 * 'chai': 'chai'
	 *}
	 */
}

// rendererConfig.target = webpackTargetElectronRenderer(rendererConfig);

module.exports = [
	nodeConfig

	/*
	 * electronRendererConfig
	 * browserConfig
	 */
]
