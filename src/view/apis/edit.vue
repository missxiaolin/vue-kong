<template>
  <div class="app-container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="api名称：" prop="name">
        <el-input name="name" type="text" v-model="ruleForm.name" placeholder="api名称"></el-input>
      </el-form-item>

      <el-form-item label="域名：" prop="hosts">
        <el-input name="hosts" type="text" v-model="ruleForm.hosts" placeholder="域名"></el-input>
      </el-form-item>

      <el-form-item label="发送方式：" prop="methods">
        <el-checkbox-group v-model="ruleForm.methods">
          <el-checkbox label="POST"></el-checkbox>
          <el-checkbox label="GET"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="匹配路径：" prop="uris">
        <el-input name="uris" type="text" v-model="ruleForm.uris" placeholder="匹配路径"></el-input>
      </el-form-item>

      <el-form-item label="转发地址：" prop="upstream_url">
        <el-input name="upstream_url" type="text" v-model="ruleForm.upstream_url" placeholder="转发地址"></el-input>
      </el-form-item>

      <el-form-item label="是否前缀：" prop="strip_uri">
        <el-radio-group v-model="ruleForm.strip_uri">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="preserve_host：" prop="preserve_host">
        <el-radio-group v-model="ruleForm.preserve_host">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="失败重试次数：" prop="retries">
        <el-input name="retries" type="text" v-model="ruleForm.retries" placeholder="失败重试次数"></el-input>
      </el-form-item>
      <el-form-item label="连接超时时间：" prop="upstream_connect_timeout">
        <el-input name="upstream_connect_timeout" type="text" v-model="ruleForm.upstream_connect_timeout" placeholder="连接超时时间"></el-input>
      </el-form-item>
      <el-form-item label="连续写入操作：" prop="upstream_send_timeout">
        <el-input name="upstream_send_timeout" type="text" v-model="ruleForm.upstream_send_timeout" placeholder="连续写入操作"></el-input>
      </el-form-item>
      <el-form-item label="连续读取操作：" prop="upstream_read_timeout">
        <el-input name="upstream_read_timeout" type="text" v-model="ruleForm.upstream_read_timeout" placeholder="连续读取操作"></el-input>
      </el-form-item>
      <el-form-item label="端口服务：" prop="https_only">
        <el-radio-group v-model="ruleForm.https_only">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="PROTO头：" prop="http_if_terminated">
        <el-radio-group v-model="ruleForm.http_if_terminated">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { updated, apiInfo } from 'api/apis'
import { ERR_OK } from '@/api/config'
import { Message } from 'element-ui'

export default {
  data () {
    return {
      rules: {
        name: {
          required: true,
          message: '请输入用户名称',
          trigger: 'blur'
        },
        strip_uri: {
          required: false,
          message: '请输入',
          trigger: 'blur'
        },
        hosts: {
          required: true,
          message: '请输入域',
          trigger: 'blur'
        },
        methods: {
          required: true,
          message: '请输入发送方式',
          trigger: 'blur'
        },
        http_if_terminated: {
          required: false,
          message: '请输入',
          trigger: 'blur'
        },
        https_only: {
          required: false,
          message: '请输入',
          trigger: 'blur'
        },
        retries: {
          required: false,
          message: '请输入失败重试次数',
          trigger: 'blur'
        },
        uris: {
          required: true,
          message: '请输入匹配路径',
          trigger: 'blur'
        },
        preserve_host: {
          required: false,
          message: '请输入',
          trigger: 'blur'
        },
        upstream_connect_timeout: {
          required: false,
          message: '请输入超时时间',
          trigger: 'blur'
        },
        upstream_read_timeout: {
          required: false,
          message: '请输入连续读取操作',
          trigger: 'blur'
        },
        upstream_send_timeout: {
          required: false,
          message: '请输入连续写入操作',
          trigger: 'blur'
        },
        upstream_url: {
          required: true,
          message: '请输入转发地址',
          trigger: 'blur'
        }
      },
      ruleForm: {
        'id': this.$route.params.id,
        'name': '',
        'strip_uri': true,
        'hosts': '',
        'methods': [],
        'http_if_terminated': false,
        'https_only': false,
        'retries': null,
        'uris': '',
        'preserve_host': false,
        'upstream_connect_timeout': '',
        'upstream_read_timeout': '',
        'upstream_send_timeout': '',
        'upstream_url': ''
      }
    }
  },
  created () {
    this.info()
  },
  methods: {
    // 验证
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
    // api 详情
    async info () {
      let params = {
        id: this.ruleForm.id
      }
      let response = await apiInfo(params)
      if (response.data.code != ERR_OK) {
        return
      }
      let info = response.data.data
      this.ruleForm.name = info.name
      this.ruleForm.strip_uri = info.strip_uri
      this.ruleForm.uris = info.uris[0]
      this.ruleForm.hosts = info.hosts[0]
      this.ruleForm.upstream_url = info.upstream_url
      this.ruleForm.retries = info.retries
      this.ruleForm.preserve_host = info.preserve_host
      this.ruleForm.upstream_connect_timeout = info.upstream_connect_timeout
      this.ruleForm.upstream_send_timeout = info.upstream_send_timeout
      this.ruleForm.upstream_read_timeout = info.upstream_read_timeout
      this.ruleForm.https_only = info.https_only
      this.ruleForm.http_if_terminated = info.http_if_terminated
      info.methods.forEach((value, index, array) => {
        this.ruleForm.methods.push(value)
      })
    },
    // 修改
    async request () {
      let params = this.ruleForm
      let response = await updated(params)
      this.loading = true
      if (response.data.code == ERR_OK) {
        this.$router.push({
          path: '/apis'
        })
        this.loading = false
      } else {
        Message(response.data.message)
      }
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
