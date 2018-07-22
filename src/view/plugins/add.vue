<template>
  <div class="components-container" style='height:100vh'>
    <div class="editor-container">
      <json-editor ref="jsonEditor" v-model="value"></json-editor>
      <el-button class="btn" type="primary" @click="add()">立即创建</el-button>
    </div>
  </div>
</template>

<script>
import { pluginsAdd } from 'api/plugins'
import { ERR_OK } from '@/api/config'
import { Message } from 'element-ui'

import jsonEditor from 'base/jsonEditor'
const jsonData = '{}'

export default {
  components: {jsonEditor},
  data () {
    return {
      value: JSON.parse(jsonData)
    }
  },
  methods: {
    // 添加
    async add () {
      let value = this.value
      if (typeof this.value == 'string') {
        value = JSON.parse(this.value)
      }
      let response = await pluginsAdd(value)
      if (response.data.code == ERR_OK) {
        this.$router.push({
          path: '/plugins'
        })
        this.loading = false
      } else {
        Message(response.data.message)
      }
    }
  }
}
</script>

<style scoped>
.editor-container{
  position: relative;
  height: 100%;
}
.btn{
  margin-top: 20px;
}
</style>
