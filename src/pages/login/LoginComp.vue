<template>
  <div>LoginComp</div>
  <div class="login-container"></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from 'vue'
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Data {}
export default defineComponent({
  name: 'LoginComp',
  components: {},
  props: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({})
    return {
      ...toRefs(data),
    }
  },
})
</script>

<style scoped lang="scss"></style>
