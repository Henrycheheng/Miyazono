<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from 'vue'
import { Data } from './Data'
export default defineComponent({
  name: 'HomeComponent',
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
