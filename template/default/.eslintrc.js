module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-var': 2, //使用const申明引用类型，避免使用var
    'no-const-assign': 2, // 禁止修改使用const声明的变量
    'no-new-object': 2, // 使用字面值创建对象
    'no-array-constructor': 2, // 使用字面量声明数组
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-duplicate-case': 2, //switch中的case标签不能重复
    'no-else-return': 2, //如果if语句里面有return,后面不能跟else语句
    'no-duplicate-imports': 2,// 不允许出现未使用组件
    'prefer-const': 2, // 使用let而非var
    'prefer-template': 1, //使用模板字符串而不是连接符
    'arrow-parens': [2, 'as-needed'], // 一个函数适合用一行且只有一个参数，省略花括号、圆括号和 return，否则不要省略
    'arrow-body-style': [2, 'as-needed'], // 一个函数适合用一行且只有一个参数，省略花括号、圆括号和 return，否则不要省略
    'semi': [1, 'always'],      //语句强制分号结尾
    'object-shorthand': 0, // 使用对象方法的简写形式
    'quote-props': 0, // 只有对那些不合法的属性名标识符添加引号
    'camelcase': 2, // 小驼峰
    'comma-dangle': [2, 'never'], // 对象最后一个值 不需要逗号
    'quotes': [1, 'single'], // 字符串使用单引号
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: false
      }
    ],
    // 强制执行v-bind指令风格 使用:
    'vue/v-bind-style': ['error', 'shorthand'],
    // 强制执行v-on指令风格 使用@
    'vue/v-on-style': ['error', 'shorthand'],
    // 多个属性的元素应该分多行撰写，每个属性一行（改为单行最多允许存在三个属性）
    'vue/max-attributes-per-line': ['error', {
      'singleline': 2,
      'multiline': {
        max: 1,
        allowFirstLine: false
      }
    }],
    // DOM 模板中总是 kebab-case 的（HTML 是大小写不敏感的）
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      'registeredComponentsOnly': false,
      'ignores': []
    }],
    // 组件名kebab-case 字符串
    'vue/name-property-casing': ['error', 'kebab-case'],
    // 在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。
    'vue/prop-name-casing': ['error', 'camelCase'],
    // 组件属性排序 name components mixins props data computed watch methods 生命周期
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'methods',
        'LIFECYCLE_HOOKS',
        ['template', 'render'],
        'renderError'
      ]
    }]
  }
};
