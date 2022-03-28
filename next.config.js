/* eslint-disable @typescript-eslint/no-var-requires */

/*
 * next-transpile-modules is necessary because:
 * - Global CSS cannot be imported from within node_modules.
 *   Why: https://nextjs.org/docs/messages/css-npm
 *   RFC: https://github.com/vercel/next.js/discussions/27953
 */
const withTM = require('next-transpile-modules')([]);

/** @type {import("next").NextConfig} */
module.exports = withTM({
	reactStrictMode: true,
	experimental: {
		/**
		 * Necessary to prevent errors like:
		 * - Module not found: ESM packages (lodash-es) need to be imported.
		 *   Use 'import' to reference the package instead.
		 *   Solution: https://nextjs.org/docs/messages/import-esm-externals
		 */
		esmExternals: 'loose',
	},
	async rewrites() {
		return [
			{
				source: '/admin/:path*',
				destination: '/admin',
			},
		];
	},
	typescript: {
		tsconfigPath: './tsconfig.build.json',
	},
	images: {
		domains: [],
	},
	productionBrowserSourceMaps: process.env.DEBUG_TOOLS === 'true',
	publicRuntimeConfig: {
		NODE_ENV: process.env.NODE_ENV,
		PORT: process.env.PORT,
		CLIENT_URL: process.env.CLIENT_URL,
	},
});
