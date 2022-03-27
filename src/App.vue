<script setup lang="ts">
import { useMainStore } from './store/main'
import { NButton, NInput } from 'naive-ui'
import { ButtonProps, InputProps } from 'naive-ui'
import Search from './components/serach'

type ButtonThemeOverrides = NonNullable<ButtonProps['themeOverrides']>
type InputThemeOverrides = NonNullable<InputProps['themeOverrides']>

const mainStore = useMainStore()

const updateName = () => {
  // $patch 修改store中的数据
  mainStore.$patch({
    name: 'updateName',
  })
}

const updatePassword = () => {
  mainStore.$patch({
    password: 'updatePassword',
  })
}

const buttonThemeOverrides: ButtonThemeOverrides = {
  heightMedium: '40px',
  textColor: 'rgba(24, 127, 231, 1)',
  borderRadiusMedium: '8px',
}

const inputThemeOverrides: InputThemeOverrides = {
  textColor: 'rgba(24, 127, 231, 1)',
  textDecorationColor: 'rgba(24, 127, 231, 1)',
  placeholderColor: '#adb0b8',
}

// eslint-disable-next-line no-console
console.log(import.meta.env.VITE_APP_WEB_URL)
</script>

<template>
  <div class="loginContainer">
    <div class="usernameInfo">
      <n-input :theme-overrides="inputThemeOverrides" placeholder="请输入账号">账号</n-input>
      <n-input :theme-overrides="inputThemeOverrides" placeholder="请输入密码">密码</n-input>
    </div>
    <n-button :theme-overrides="buttonThemeOverrides">{{ 1 }}</n-button>
  </div>
  <div class="test">1</div>
  <Search />
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
  color: $bg-color;
}
</style>
