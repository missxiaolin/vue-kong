<template>
  <div class="app-container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="服务名称：" prop="name">
        <el-input name="protocol" type="text" v-model="ruleForm.name" placeholder="服务名称"></el-input>
      </el-form-item>
      <el-form-item label="域名：" prop="url">
        <el-input name="protocol" type="text" v-model="ruleForm.url" placeholder="域名"></el-input>
      </el-form-item>
      <el-form-item label="通信协议：" prop="protocol">
        <el-input name="protocol" type="text" v-model="ruleForm.protocol" placeholder="通信协议"></el-input>
      </el-form-item>
      <el-form-item label="请求路径：" prop="path">
        <el-input name="path" type="text" v-model="ruleForm.path" placeholder="请求路径"></el-input>
      </el-form-item>
      <el-form-item label="服务器端口：" prop="port">
        <el-input name="port" type="number" v-model="ruleForm.port" placeholder="服务器端口"></el-input>
      </el-form-item>
      <el-form-item label="失败重试次数：" prop="retries">
        <el-input name="text" type="number" v-model="ruleForm.retries" placeholder="失败重试次数"></el-input>
      </el-form-item>
      <el-form-item label="连接超时时间：" prop="connect_timeout">
        <el-input name="connect_timeout" type="number" v-model="ruleForm.retries" placeholder="连接超时时间"></el-input>
      </el-form-item>
      <el-form-item label="连续写操作：" prop="retries">
        <el-input name="text" type="number" v-model="ruleForm.retries" placeholder="连续写操作"></el-input>
      </el-form-item>
      <el-form-item label="连续读取操作：" prop="read_timeout">
        <el-input name="read_timeout" type="number" v-model="ruleForm.retries" placeholder="连续读取操作"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  serviceUpload,
  serviceInfo
} from 'api/service'
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
        name: [{
          required: true,
          message: '请输入服务名称',
          trigger: 'blur'
        }],
        url: {
          required: true,
          message: '请输入域名',
          trigger: 'blur'
        },
        protocol: [{
          required: false,
          message: '请输入通信协议',
          trigger: 'blur'
        }],
        path: {
          required: false,
          message: '请输入请求路径',
          trigger: 'blur'
        },
        port: {
          required: false,
          message: '请输入服务器端口',
          trigger: 'blur'
        },
        retries: {
          required: false,
          message: '请输入失败重试次数',
          trigger: 'blur'
        },
        connect_timeout: {
          required: false,
          message: '请输入连接超时时间',
          trigger: 'blur'
        },
        write_timeout: {
          required: false,
          message: '请输入连续写操作',
          trigger: 'blur'
        },
        read_timeout: {
          required: false,
          message: '请输入连续读取操作',
          trigger: 'blur'
        }
      },
      ruleForm: {
        id: this.$route.params.id,
        protocol: '',
        path: '',
        port: '',
        retries: '',
        connect_timeout: '',
        write_timeout: '',
        read_timeout: ''
      }
    }
  },
  created () {
    this.serviceInfo()
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = this.ruleForm
          this.edit(serviceUpload(params))
        } else {
          console.log('error submit!!')
        }
      })
    },
    // 修改
    async edit (callback) {
      let response = await callback
      this.loading = true
      if (response.data.code == ERR_OK) {
        this.$router.push({
          path: '/kong/service/list'
        })
        this.loading = false
      } else {
        Message(response.data.message)
      }
    },
    // 详情
    async serviceInfo () {
      let self = this
      let params = {
        id: this.$route.params.id
      }
      await serviceInfo(params).then(function (response) {
        if (response.data.code == ERR_OK) {
          self.ruleForm.name = response.data.data.name
          self.ruleForm.protocol = response.data.data.protocol
          self.ruleForm.url = `${response.data.data.protocol}://${response.data.data.host}`
          self.ruleForm.port = response.data.data.port
          self.ruleForm.retries = response.data.data.retries
          self.ruleForm.connect_timeout = response.data.data.connect_timeout
          self.ruleForm.write_timeout = response.data.data.write_timeout
          self.ruleForm.read_timeout = response.data.data.read_timeout

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
