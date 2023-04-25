module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},

	// the ts-eslint recommended ruleset sets the parser so we need to set it back
	parser: 'vue-eslint-parser',

	parserOptions: {
		ecmaVersion: 2020,
		parser: '@typescript-eslint/parser',
		extraFileExtensions: ['.vue'],
		ecmaFeatures: {
			jsx: true
		},
		sourceType: 'module'
	},

	plugins: ['@typescript-eslint'],

	extends: [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],

	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

		// this rule, if on, would require explicit return type on the `render` function
		'@typescript-eslint/explicit-function-return-type': 'off',
		'vue/v-on-event-hyphenation': 'off'
	},

	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off'
			}
		}
	],
	globals: {
		__WebpackModuleApi: 'writable',
		defineOptions: 'writable'
	},
	// 忽略的文件
	ignorePatterns: []
};
