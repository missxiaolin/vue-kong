<template>
  <div class="app-container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号：" prop="mobile">
        <el-input name="mobile" type="number" v-model="ruleForm.mobile" autoComplete="off" placeholder="手机号码"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input name="password" type="text" v-model="ruleForm.password" autoComplete="off" placeholder="密码" onfocus="this.type='password'"></el-input>
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
  userEdit,
  userInfo
} from 'api/user'
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
          message: '请输入用户名称',
          trigger: 'blur'
        }],
        mobile: {
          required: true,
          message: '请输入正确手机号',
          trigger: 'blur'
        },
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 8,
          message: '长度在 3 到 8 个字符',
          trigger: 'blur'
        }
        ]
      },
      ruleForm: {
        id: this.$route.params.id,
        name: '',
        mobile: '',
        password: ''
      }
    }
  },
  created () {
    if (this.ruleForm.id != 0) {
      this.userInfo()
    }
  },
  methods: {
    submitForm (formName) {
      let self = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          self.add()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async add () {
      let params = this.ruleForm
      let response = await userEdit(params)
      this.loading = true
      if (response.data.code == ERR_OK) {
        this.$router.push({
          path: '/user'
        })
        this.loading = false
      } else {
        Message(response.data.message)
      }
    },
    async userInfo () {
      let self = this
      let params = {
        id: this.$route.params.id
      }
      await userInfo(params).then(function (response) {
        if (response.data.code == ERR_OK) {
          self.ruleForm.name = response.data.data.name
          self.ruleForm.mobile = response.data.data.mobile
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
