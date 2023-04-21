module.exports = {
    root: true,
    env: {},
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: 'build/config/base.js',
            },
        },
    },
    extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended','plugin:@typescript-eslint/recommended'],
    rules: {
        '@typescript-eslint/ban-ts-comment': 0,
        // prop传递的参数必须有默认值
        'vue/require-default-prop': 0,
        'vue/eqeqeq': 'error', // template 里面强制使用===,!==
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'always'
            }
        ],
        // 组件命名强制驼峰
        'vue/multi-word-component-names': 0,
        '@typescript-eslint/no-var-requires': 0,
        'vue/max-attributes-per-line': 0,
        '@typescript-eslint/no-explicit-any': 0,
        // 自动闭合空标签
        '@typescript-eslint/no-non-null-assertion': 0,
        'vue/valid-v-for': 0
    }
};
