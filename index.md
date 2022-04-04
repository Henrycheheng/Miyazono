### 安装

```bash
npm init @vitejs/app vite_vue3_ts --template
```

### cd vite_vue3_ts

### yarn

### yarn dev

### yarn add eslint --dev (`eslint`约束分分格)

- 主要是 eslint ts prittier 的配置

```bash
yarn add eslint --dev
yarn add eslint-plugin-vue --dev
yarn add @typescript-eslint/eslint-plugin --dev
yarn add eslint-plugin-prettier --dev
yarn add @typescript-eslint/parser --dev
```

> 如果 eslint 报错，

```bash
yarn config set ignore-engines true 之后再次运行安装
```

### 新建.eslintrc.js

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    // eslint-config-prettier 的缩写
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier的缩写
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-var': 'error',
    'prettier/prettier': 'error',
    // 禁止出现console
    'no-console': 'warn',
    // 禁用debugger
    'no-debugger': 'warn',
    // 禁止出现重复的 case 标签
    'no-duplicate-case': 'warn',
    // 禁止出现空语句块
    'no-empty': 'warn',
    // 禁止不必要的括号
    'no-extra-parens': 'off',
    // 禁止对 function 声明重新赋值
    'no-func-assign': 'warn',
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 'warn',
    // 强制所有控制语句使用一致的括号风格
    curly: 'warn',
    // 要求 switch 语句中有 default 分支
    'default-case': 'warn',
    // 强制尽可能地使用点号
    'dot-notation': 'warn',
    // 要求使用 === 和 !==
    eqeqeq: 'warn',
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 'warn',
    // 禁止出现空函数
    'no-empty-function': 'warn',
    // 禁用不必要的嵌套块
    'no-lone-blocks': 'warn',
    // 禁止使用多个空格
    'no-multi-spaces': 'warn',
    // 禁止多次声明同一变量
    'no-redeclare': 'warn',
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': 'warn',
    // 禁用不必要的 return await
    'no-return-await': 'warn',
    // 禁止自我赋值
    'no-self-assign': 'warn',
    // 禁止自身比较
    'no-self-compare': 'warn',
    // 禁止不必要的 catch 子句
    'no-useless-catch': 'warn',
    // 禁止多余的 return 语句
    'no-useless-return': 'warn',
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 'off',
    // 允许delete变量
    'no-delete-var': 'off',
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': 'warn',
    // 强制在代码块中使用一致的大括号风格
    'brace-style': 'warn',
    // 强制使用骆驼拼写法命名约定
    camelcase: 'warn',
    // 强制使用一致的缩进
    indent: 'off',
    // 强制在 JSX 属性中一致地使用双引号或单引号
    // 'jsx-quotes': 'warn',
    // 强制可嵌套的块的最大深度4
    'max-depth': 'warn',
    // 强制最大行数 300
    // "max-lines": ["warn", { "max": 1200 }],
    // 强制函数最大代码行数 50
    // 'max-lines-per-function': ['warn', { max: 70 }],
    // 强制函数块最多允许的的语句数量20
    'max-statements': ['warn', 100],
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': ['warn', 3],
    // 强制函数定义中最多允许的参数数量
    'max-params': ['warn', 3],
    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': ['warn', { max: 1 }],
    // 要求方法链中每个调用都有一个换行符
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }],
    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': 'warn',
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 'warn',
    // 禁止出现多行空行
    'no-multiple-empty-lines': 'warn',
    // 禁止出现;
    semi: ['warn', 'never'],
    // 强制在块之前使用一致的空格
    'space-before-blocks': 'warn',
    // 强制在 function的左括号之前使用一致的空格
    // 'space-before-function-paren': ['warn', 'never'],
    // 强制在圆括号内使用一致的空格
    'space-in-parens': 'warn',
    // 要求操作符周围有空格
    'space-infix-ops': 'warn',
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': 'warn',
    // 强制在注释中 // 或 /* 使用一致的空格
    // "spaced-comment": "warn",
    // 强制在 switch 的冒号左右有空格
    'switch-colon-spacing': 'warn',
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': 'warn',
    'no-var': 'warn',
    'prefer-const': 'warn',
    'prefer-rest-params': 'warn',
    'no-useless-escape': 'warn',
    'no-irregular-whitespace': 'warn',
    'no-prototype-builtins': 'warn',
    'no-fallthrough': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-case-declarations': 'warn',
    'no-async-promise-executor': 'warn',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}
```

### pritter

yarn add prettier --dev

### 解决 ESLint 中的样式规范和 prettier 中样式规范的冲突

以 prettier 的样式规范为准，使 ESLint 中的样式规范自动失效

yarn add eslint-config-prettier --dev

### .prettierrc.js

```js
module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
}
```

### .pritterignore

dist node_module

### script 中配置自动格式化

```js
{
  "script": {
    "lint": "eslint src --fix --ext .ts,.tsx,.vue,.js,.jsx",
    "prettier": "prettier --write ."
  }
}
```

> 运行 `bash`

```bash
# eslint 检查
yarn lint
# prettier 自动格式化
yarn prettier
```

### 配置 husky + lint-staged

使用 husky + lint-staged 助力团队编码规范, husky&lint-staged 安装推荐使用 mrm, 它将根据 package.json 依赖项中的代码质量工具来安装和配置 husky 和 lint-staged，因此请确保在此之前安装并配置所有代码质量工具，如 Prettier 和 ESlint

### 安装 mrm

npm i mrm -D --registry=https://registry.npm.taobao.org

### husky

husky 是一个为 git 客户端增加 hook 的工具。安装后，它会自动在仓库中的 .git/ 目录下增加相应的钩子；比如 pre-commit 钩子就会在你执行 git commit 的触发。

那么我们可以在 pre-commit 中实现一些比如 lint 检查、单元测试、代码美化等操作。当然，pre-commit 阶段执行的命令当然要保证其速度不要太慢，每次 commit 都等很久也不是什么好的体验。

### lint-staged

一个仅仅过滤出 Git 代码暂存区文件(被 git add 的文件)的工具；这个很实用，因为我们如果对整个项目的代码做一个检查，可能耗时很长，如果是老项目，要对之前的代码做一个代码规范检查并修改的话，这可能就麻烦了呀，可能导致项目改动很大。

> mrm 安装 lint-staged 会自动把 husky 一起安装下来

### npx mrm lint-staged

git commit 之后代码就可以自动格式化了

### 配置文件引用别名 alias src 设置为 @

> 直接修改 vite.config.ts 文件配置:

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
```

### 修改 tsconfig.json

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

### 配置 css 预处理器 scss

```bash
yarn add sass-loader --dev
yarn add dart-sass --dev
yarn add sass --dev
```

### 配置全局 scss 样式文件

- 在 src/assets 下新增 style 文件夹，用于存放全局样式文件
- 新建 main.scss, 设置一个用于测试的颜色变量 :

### 路由

```bash
yarn add vue-router@4
```

```ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/Login/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
```

### 修改入口文件

```ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

const app = createApp(App)

app.use(router)

app.mount('#app')
```

[vue-router: https://next.router.vuejs.org/zh/guide/](vue-router: https://next.router.vuejs.org/zh/guide/)

### meta

meta 可以让我们有更多的发挥空间，这里提供一些参考：

title:string; 页面标题，通常必选。
icon?:string; 图标，一般配合菜单使用。
auth?:boolean; 是否需要登录权限。
ignoreAuth?:boolean; 是否忽略权限。
roles?:RoleEnum[]; 可以访问的角色
keepAlive?:boolean; 是否开启页面缓存
hideMenu?:boolean; 有些路由我们并不想在菜单中显示，比如某些编辑页面。
order?:number; 菜单排序。
frameUrl?:string; 嵌套外链。

### 统一请求封装

#### 安装 axios

> 安装 nprogress 用于请求 loading,类型声明，或者添加一个包含 `declare module 'nprogress'

```bash
yarn add axios
yarn add nprogress
yarn add @types/nprogress --dev
```

### 新增 service 文件夹，service 下新增 http.ts 文件以及 api 文件夹

> 安装 nprogress 的类型文件

```bash
yarn add @types/nprogress --dev
```

### 封装`https`

```ts
import axios, { AxiosRequestConfig } from 'axios'
import NProgress from 'nprogress'

// 设置请求头和请求路径

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset-UTF-8'

axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = window.sessionStorage.getItem('token')

    if (token) {
      //@ts-ignore
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return error
  }
)

axios.interceptors.response.use((res) => {
  if ((res.data.code = 200)) {
    sessionStorage.setItem('token', '')
    // token过期操作
  }
  return res
})

interface ResType<T> {
  code: number
  data?: T
  msg: string
  err?: string
}

interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
  upload<T>(url: string, params: unknown): Promise<ResType<T>>
  download(url: string): void
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  download(url) {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.onload = function () {
      document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
  },
}
export default http
```

### vueRequest

除了自己手动封装 axios ,这里还推荐一个 vue3 的请求库: VueRequest,非常好用,下面来看看 VueRequest 有哪些比较好用的功能吧!!!

🚀 所有数据都具有响应式
🔄 轮询请求
🤖 自动处理错误重试
🗄 内置请求缓存
💧 节流请求与防抖请求
🎯 聚焦页面时自动重新请求
⚙️ 强大的分页扩展以及加载更多扩展
📠 完全使用 Typescript 编写，具有强大的类型提示
⚡️ 兼容 Vite
🍃 轻量化
📦 开箱即用

[https://www.attojs.com/](https://www.attojs.com/)

### 安装 pinia

```bash
yarn add pinia@next
```

> Pinia 与 Vuex 的区别：

id 是必要的，它将所使用 store 连接到 devtools。
创建方式：new Vuex.Store(...)(vuex3)，createStore(...)(vuex4)。
对比于 vuex3 ，state 现在是一个函数返回对象。
没有 mutations，不用担心，state 的变化依然记录在 devtools 中。

> 在`main.ts`引入

```ts
import { createPinia } from 'pinia'
```

> 创建根存储库并将其传递给应用程序

```ts
app.use(createPinia())
```

> 创建 store

```ts
import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'mian',
  state: () => ({
    name: '超级管理员',
  }),
})
```

### 组件中使用 store

```vue
<template>
  <div>{{ mainStore.name }}</div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/mian'

const mainStore = useMainStore()
</script>
```

### getters

> Pinia 中的 getter 与 Vuex 中的 getter 、组件中的计算属性具有相同的功能

```ts
import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'mian',
  state: () => ({
    name: '超级管理员',
  }),
  getters {
    nameLength: (state) => state.name.length,
  }
})
```

### 组件中使用

```vue
<template>
  <div>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</div>
  <hr />
  <button @click="updateName">修改store中的name</button>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/mian'

const mainStore = useMainStore()

const updateName = () => {
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了',
  })
}
</script>
```

### actions

> 这里与 Vuex 有极大的不同，Pinia 仅提供了一种方法来定义如何更改状态的规则，放弃 mutations 只依靠 Actions，这是一项重大的改变。

- Pinia 让 Actions 更加的灵活：

  - 可以通过组件或其他 action 调用
  - 可以从其他 store 的 action 中调用
  - 直接在 store 实例上调用
  - 支持同步或异步
  - 有任意数量的参数
  - 可以包含有关如何更改状态的逻辑（也就是 vuex 的 mutations 的作用）
  - 可以 $patch 方法直接更改状态属性

```ts
  import { definestore } from 'paina'

  export const useMainStore = () => {
    id: 'main',
    state: () => {
      // state是一个函数，返回存储在store中的数据
      name: '超级管理员'
    }
    getters: {
      // 是一个函数对象
      nameLength: (state) => state.name.length
    }，
    actions: {
      async insertPost(data: string) {
        // 可以异步
        // await ajaxRequest(data)
        this.name = data
      }
    }
  }
```

### 环境变量配置

vite 提供了两种模式：具有开发服务器的开发模式（development）和生产模式（production）

> 创建.env.development

> 组件中使用

```ts
console.log(import.meta.env.VITE_APP_WEB_URL)
```

> 配置 package.json

```json
    "build:dev": "vue-tsc --noEmit && vite build --mode development",
    "build:pro": "vue-tsc --noEmit && vite build --mode production",
```

### 使用组件库 Naive UI

```bash
yarn add naive-ui
```

### 字体

```bash
yarn add vfonts
```

### 全局配置 Config Provider

```vue
<n-config-provider :locale="zhCN" :theme="theme">
    <!-- 容器 -->
</n-config-provider>
```

### 自动引入 naive-ui

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
})
```

### Vite 常用基础配置

运行 代理 和 打包 配置

```ts

  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
    proxy: {},
  },
  // 生产环境去除debugger
  build: {
    terserOptions: {
      compress: {
        // eslint-disable-next-line camelcase
        drop_console: true,
        // eslint-disable-next-line camelcase
        drop_debugger: true,
      },
    },
  },

```

### 生产环境生成 .gz 文件

> 开启 gzip 可以极大的压缩静态资源，对页面加载的速度起到了显著的作用。

使用 vite-plugin-compression 可以 gzip 或 brotli 的方式来压缩资源，这一步需要服务器端的配合，vite 只能帮你打包出 .gz 文件。此插件无需配置参数，引入即可。

### 安装 vite-plugin-compression

```bash
yarn add --dev vite-plugin-compression
```

### plugins 中添加

```ts
import viteCompression from 'vite-plugin-compression'

// gzip压缩 生产环境生成 .gz 文件
viteCompression({
  verbose: true,
  disable: false,
  threshold: 10240,
  algorithm: 'gzip',
  ext: '.gz',
}),
```

### 传统浏览器支持

```bash
@vitejs/plugin-legacy
```

### VueUse hook 库

```bash
yarn add @vueuse/core
```

### 使用指南

```bash
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'

export default {
  setup() {
    // tracks mouse position
    const { x, y } = useMouse()

    // is user prefers dark theme
    const isDark = usePreferredDark()

    // persist state in localStorage
    const store = useLocalStorage(
      'my-storage',
      {
        name: 'Apple',
        color: 'red',
      },
    )

    return { x, y, isDark, store }
  },
}
```

### lerna 管理多个包

[lerna](https://www.lernajs.cn/)

### 全局安装 lerna

```bash
npm install --global lerna
```
