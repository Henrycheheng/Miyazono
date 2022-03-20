<script setup lang="ts">
import { useMainStore } from './store/main'
import { NButton, NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
import { ButtonProps } from 'naive-ui'

type ButtonThemeOverrides = NonNullable<ButtonProps['themeOverrides']>

const mainStore = useMainStore()

const updateName = () => {
  // $patch 修改store中的数据
  mainStore.$patch({
    name: 'updateName',
  })
}

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#FF0000',
    fontWeightStrong: '600',
  },
  Button: {
    textColor: '#FF0000',
  },
}

const buttonThemeOverrides: ButtonThemeOverrides = {
  heightMedium: '40px',
  textColor: 'rgba(24, 127, 231, 1)',
}

// eslint-disable-next-line no-console
console.log(import.meta.env.VITE_APP_WEB_URL)
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1 class="test">{{ mainStore.name }}</h1>

  <div>用户名： {{ mainStore.name }} <br />长度： {{ mainStore.nameLength }}</div>
  <hr />
  <button @click="updateName">修改store中的值</button>

  <n-config-provider :theme-overrides="themeOverrides">naive-ui</n-config-provider>
  <n-button>naive-ui</n-button>
  <hr />

  <n-button :theme-overrides="buttonThemeOverrides">theme</n-button>
  <br />
  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    test
  </n-config-provider>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.test {
  color: $test-color;
}
</style>
