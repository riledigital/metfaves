module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'plugin:vue/essential'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 11,
    'sourceType': 'module',
    'ecmaFeatures': {
      'impliedStrict': true
    }
  },
  'plugins': [
    'vue',
    'eslint-plugin-vue'
  ],
  'rules': {
    'vue/no-parsing-error': ['warn'],
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'vue/html-indent': ['warn', 2, {
      'alignAttributesVertically': true,
    }]
  }
};