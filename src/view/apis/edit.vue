<template>
  <div class="app-container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="api名称：" prop="name">
        <el-input name="name" type="text" v-model="ruleForm.name" placeholder="api名称"></el-input>
      </el-form-item>
      <!-- :prop="ruleForm.hosts[index]" -->
      <el-form-item v-for="(domain, index) in ruleForm.hosts" :label="'域名：'" :key="index" :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'}">
        <el-input :model="domain"></el-input>
        <el-button v-show="index != 0" @click.prevent="removeDomain(domain)">删除</el-button>
      </el-form-item>

      <el-form-item>
        <el-button @click="addDomain">新增域名</el-button>
      </el-form-item>

      <el-form-item label="发送方式：" prop="methods">
        <el-checkbox-group v-model="ruleForm.methods">
          <el-checkbox label="POST"></el-checkbox>
          <el-checkbox label="GET"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item v-for="(uri, index) in ruleForm.uris" :label="'匹配路径：'" :key="index" :rules="{
      required: true, message: '匹配路径不能为空', trigger: 'blur'}">
        <el-input :model="uri"></el-input>
        <el-button v-show="index != 0" @click.prevent="removeUri(uri)">删除</el-button>
      </el-form-item>

      <el-form-item>
        <el-button @click="addUri">新增匹配路径</el-button>
      </el-form-item>

      <el-form-item label="转发地址：" prop="upstream_url">
        <el-input name="upstream_url" type="text" v-model="ruleForm.upstream_url" placeholder="转发地址"></el-input>
      </el-form-item>
      <el-form-item label="strip_uri：" prop="strip_uri">
        <el-radio v-model="ruleForm.strip_uri" label="true">是</el-radio>
        <el-radio v-model="ruleForm.strip_uri" label="false">否</el-radio>
      </el-form-item>
      <el-form-item label="preserve_host：" prop="preserve_host">
        <el-radio v-model="ruleForm.preserve_host" label="true">是</el-radio>
        <el-radio v-model="ruleForm.preserve_host" label="false">否</el-radio>
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
        <el-radio v-model="ruleForm.https_only" label="true">是</el-radio>
        <el-radio v-model="ruleForm.https_only" label="false">否</el-radio>
      </el-form-item>
      <el-form-item label="PROTO头：" prop="http_if_terminated">
        <el-radio v-model="ruleForm.http_if_terminated" label="true">是</el-radio>
        <el-radio v-model="ruleForm.http_if_terminated" label="false">否</el-radio>
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
} from 'api/apis'
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
        'hosts': [],
        'methods': [],
        'http_if_terminated': false,
        'https_only': false,
        'retries': null,
        'uris': [],
        'preserve_host': false,
        'upstream_connect_timeout': '',
        'upstream_read_timeout': '',
        'upstream_send_timeout': '',
        'upstream_url': ''
      }
    }
  },
  created () {
    if (this.ruleForm.id != 0) {
      this.apiInfo()
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
    async apiInfo () {
      let self = this
      let params = {
        id: this.$route.params.id
      }
      await info(params).then(function (response) {
        if (response.data.code == ERR_OK) {
          self.ruleForm.name = response.data.data.name
          self.ruleForm.strip_uri = response.data.data.strip_uri
          self.ruleForm.hosts = response.data.data.hosts
          self.ruleForm.methods = response.data.data.methods
          self.ruleForm.http_if_terminated = response.data.data.http_if_terminated
          self.ruleForm.https_only = response.data.data.https_only
          self.ruleForm.retries = response.data.data.retries
          self.ruleForm.uris = response.data.data.uris
          self.ruleForm.preserve_host = response.data.data.preserve_host
          self.ruleForm.upstream_connect_timeout = response.data.data.upstream_connect_timeout
          self.ruleForm.upstream_read_timeout = response.data.data.upstream_read_timeout
          self.ruleForm.upstream_send_timeout = response.data.data.upstream_send_timeout
          self.ruleForm.upstream_url = response.data.data.upstream_url

          self.loading = false
        } else {
          Message(response.data.message)
        }
        self.loading = true
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    removeDomain (item) {
      let index = this.ruleForm.hosts.indexOf(item)
      if (index !== -1) {
        this.ruleForm.hosts.splice(index, 1)
      }
    },
    addDomain () {
      this.ruleForm.hosts.push('')
    },
    removeUri (item) {
      let index = this.ruleForm.uris.indexOf(item)
      if (index !== -1) {
        this.ruleForm.uris.splice(index, 1)
      }
    },
    addUri () {
      this.ruleForm.uris.push('')
    }
  }
}
</script>
