import { defineComponent } from 'vue'
import { NButton, NInput } from 'naive-ui'
import { ButtonProps, InputProps } from 'naive-ui'

type ButtonThemeOverrides = NonNullable<ButtonProps['themeOverrides']>
const buttonThemeOverrides: ButtonThemeOverrides = {
  heightMedium: '40px',
  textColor: 'rgba(24, 127, 231, 1)',
  borderRadiusMedium: '8px',
}
export default defineComponent({
  name: 'Search',
  setup(props) {
    return () => (
      <>
        <n-button theme-overrides={buttonThemeOverrides}>buttonThemeOverrides</n-button>
      </>
    )
  },
})
