module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'prettier'
	],
	plugins: ['svelte3', '@typescript-eslint', 'jest'],
	ignorePatterns: ['*.cjs', 'node_modules'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
		// 'svelte3/ignore-styles': () => true
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as' }],
		'@typescript-eslint/array-type': ['error', { default: 'array' }]
	}
};
