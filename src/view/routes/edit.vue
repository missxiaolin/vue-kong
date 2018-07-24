<template>
  <div class="app-container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="服务Id：" prop="protocols">
        <el-input type="text" v-model="ruleForm.service.id" placeholder="服务id"></el-input>
      </el-form-item>

      <el-form-item label="协议列表：" prop="protocols">
        <el-checkbox-group v-model="ruleForm.protocols">
          <el-checkbox label="http"></el-checkbox>
          <el-checkbox label="https"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="HTTP方法：" prop="methods">
        <el-checkbox-group v-model="ruleForm.methods">
          <el-checkbox label="POST"></el-checkbox>
          <el-checkbox label="GET"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="路径列表：" prop="paths">
        <el-input type="text" v-model="ruleForm.paths" placeholder="/my-path"></el-input>
      </el-form-item>

      <el-form-item label="删除匹配前缀：" prop="strip_path">
        <el-radio v-model="ruleForm.strip_path" :label="true">是</el-radio>
        <el-radio v-model="ruleForm.strip_path" :label="false">否</el-radio>
      </el-form-item>

      <el-form-item label="请求标头：" prop="preserve_host">
        <el-radio v-model="ruleForm.preserve_host" :label="true">是</el-radio>
        <el-radio v-model="ruleForm.preserve_host" :label="false">否</el-radio>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { routesUpdated, routesInfo } from 'api/routes'
import { ERR_OK } from '@/api/config'
import { Message } from 'element-ui'

export default {
  data () {
    return {
      rules: {
      },
      ruleForm: {
        id: this.$route.params.id,
        'hosts': null,
        'protocols': [],
        'methods': [],
        'strip_path': true,
        'preserve_host': false,
        'regex_priority': 0,
        'service': {
          'id': ''
        }
      }
    }
  },
  created () {
    this.info()
  },
  methods: {
    // 获取详情
    async info () {
      let self = this
      let params = {
        id: this.$route.params.id
      }
      let res = await routesInfo(params)
      if (res.data.code != ERR_OK) {
        return
      }
      let info = res.data.data
      this.ruleForm.service.id = info.service.id
      this.ruleForm.methods = info.methods
      this.ruleForm.paths = info.paths[0]
      this.ruleForm.protocols = info.protocols
      this.ruleForm.strip_path = info.strip_path
      this.ruleForm.preserve_host = info.preserve_host
    },
    // 数据验证
    submitForm (formName) {
      let self = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          self.request()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 路由添加
    async request () {
      let params = this.ruleForm
      let response = await routesUpdated(params)
      this.loading = true
      if (response.data.code == ERR_OK) {
        this.$router.push({
          path: '/kong/routes/list'
        })
        this.loading = false
      } else {
        Message(response.data.message)
      }
    },
    // 重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
