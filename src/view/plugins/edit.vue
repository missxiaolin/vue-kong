<template>
  <div class="components-container" style='height:100vh'>
    <div class="editor-container">
      <json-editor ref="jsonEditor" v-model="value"></json-editor>
      <el-button class="btn" type="primary" @click="upload()">修改</el-button>
    </div>
  </div>
</template>

<script>
import { pluginsUpload, pluginsInfo } from 'api/plugins'
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
  created () {
    this.info()
  },
  methods: {
    async info () {
      let params = {
        id: this.$route.params.id
      }
      let res = await pluginsInfo(params)
      if (res.data.code == ERR_OK) {
        this.value = res.data.data
      }
    },
    // 修改
    async upload () {
      let value = this.value
      if (typeof this.value == 'string') {
        value = JSON.parse(this.value)
      }
      let response = await pluginsUpload(value)
      if (response.data.code == ERR_OK) {
        this.$router.push({
          path: '/kong/plugins/list'
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
