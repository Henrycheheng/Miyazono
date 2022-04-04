<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from 'vue'
import { LoginComp } from './LoginComp'
import { useMainStore } from '@/store/main'
import { ButtonProps, InputProps } from 'naive-ui'

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

const updateloginBtn = (btnStatus: any) => {
  mainStore.$patch({
    btnStatus: '登录',
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

export default defineComponent({
  name: 'LoginComp',
  components: {},
  props: {},
  setup(props, ctx: SetupContext) {
    const data: LoginComp = reactive<LoginComp>({
      // 此时数据是写死的，后续需要获取接口的数据，调用PromiseAPI
      username: 'ls',
      password: '1234',
      loginStatus: '去注册',
    })

    return {
      ...toRefs(data),
    }
  },
})
</script>

<template>
  <div class="loginContainer">
    <div class="usernameInfo" style="display: flex">
      <span>账号</span>
      <n-input :theme-overrides="inputThemeOverrides" placeholder="请输入账号"> </n-input>
      <n-input :theme-overrides="inputThemeOverrides" placeholder="请输入密码">密码</n-input>
    </div>
    <n-button
      :theme-overrides="buttonThemeOverrides"
      @click="updateloginBtn(() => mainStore.$state)"
    >
      {{ mainStore.btnStatus }}
    </n-button>
  </div>
</template>

<style scoped lang="scss"></style>
