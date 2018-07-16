<template>
  <div class="app-container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="协议列表：" prop="protocols">
        <el-checkbox-group v-model="ruleForm.protocolsList">
          <el-checkbox label="http"></el-checkbox>
          <el-checkbox label="https"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="HTTP方法：" prop="methods">
        <el-checkbox-group v-model="ruleForm.methodsList">
          <el-checkbox label="POST"></el-checkbox>
          <el-checkbox label="GET"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="路径列表：" prop="paths">
        <el-input name="paths" type="text" v-model="ruleForm.paths" placeholder="/my-path"></el-input>
      </el-form-item>
      <el-form-item label="域名列表：" prop="hosts">
        <el-input name="hosts" type="text" v-model="ruleForm.hosts" placeholder="example.com"></el-input>
      </el-form-item>
      <el-form-item label="删除匹配前缀：" prop="strip_path">
        <el-radio v-model="ruleForm.strip_path" label="true">是</el-radio>
        <el-radio v-model="ruleForm.strip_path" label="false">否</el-radio>
      </el-form-item>
      <el-form-item label="请求标头：" prop="preserve_host">
        <el-radio v-model="ruleForm.preserve_host" label="true">是</el-radio>
        <el-radio v-model="ruleForm.preserve_host" label="false">否</el-radio>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  add,
  updated,
  info
} from 'api/routes'
import {
  ERR_OK
} from '@/api/config'
import {
  Message
} from 'element-ui'

export default {
  data () {
    return {
      rules: {
        name: {
          required: true,
          message: '请输入用户名称',
          trigger: 'blur'
        }
      },
      ruleForm: {
        'id': this.$route.params.id,
        'protocolsList': [],
        'methodsList': [],
        'strip_path': 'true',
        'preserve_host': 'false',
        'regex_priority': '0',
        'service': {
          id: this.$route.params.id
        }
      }
    }
  },
  created () {
    if (this.ruleForm.id != 0) {
      this.routesInfo()
    }
  },
  methods: {
    submitForm (formName) {
      let self = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.id == 0) {
            self.request(add)
          } else {
            self.request(updated)
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async request (method) {
      let params = this.ruleForm
      let response = await method(params)
      this.loading = true
      if (response.data.code == ERR_OK) {
        this.$router.push({
          path: '/api'
        })
        this.loading = false
      } else {
        Message(response.data.message)
      }
    },
    async routesInfo () {
      let self = this
      let params = {
        id: this.$route.params.id
      }
      await info(params).then(function (response) {
        if (response.data.code == ERR_OK) {
          self.ruleForm.name = response.data.data.name

          self.loading = false
        } else {
          Message(response.data.message)
        }
        self.loading = true
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
