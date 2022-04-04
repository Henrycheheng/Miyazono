import { defineComponent } from 'vue'
import { ButtonProps, InputProps } from 'naive-ui'

type ButtonThemeOverrides = NonNullable<ButtonProps['themeOverrides']>
type InputThemeOverrides = NonNullable<InputProps['themeOverrides']>
const buttonThemeOverrides: ButtonThemeOverrides = {
  heightMedium: '40px',
  textColor: 'rgba(24, 127, 231, 1)',
  borderRadiusMedium: '8px',
}
const InputThemeOverrides: InputThemeOverrides = {
  heightMedium: '40px',
  textColor: 'rgba(24, 127, 231, 1)',
}
export default defineComponent({
  name: 'Search',
  setup(props) {
    return () => (
      <>
        <n-input theme-overrides={InputThemeOverrides} placeholder='请输入内容'></n-input>
        <n-button theme-overrides={buttonThemeOverrides}>搜索</n-button>
      </>
    )
  },
})
