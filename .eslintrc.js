module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/html-indent': 0,
    'vue/html-self-closing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/max-attributes-per-line': 0,
    'vue/first-attribute-linebreak': 0,
    'vue/html-closing-bracket-newline': 0,


    'indent': 0,
    'comma-dangle': 0,
    'no-console': 0,
    'no-trailing-spaces': 0,
    'space-before-function-paren': 0,
    'arrow-parens': 0,
    'quotes': 0,
    'curly': 0,
  }
}
