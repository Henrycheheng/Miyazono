import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'mian',
  state: () => ({
    name: '超级管理员',
    password: '123456',
    btnStatus: '去注册',
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    async insertPost(data: string) {
      // await ajaxRequest(data)
      this.name = data
      // 此处不能使用箭头函数
    },
  },
})
