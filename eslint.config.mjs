import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
    rules: {
        'no-console': 'off',
        'vue/no-v-html': 'off',
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                varsIgnorePattern: '^.*Album$', // ignoring old albums no longer in the calendar
            },
        ],
    },
})