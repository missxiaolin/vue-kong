<template>
  <div class="app-container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号：" prop="mobile">
        <el-input name="mobile" type="number" v-model="ruleForm.mobile" autoconplete="off" placeholder="手机号码"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input name="password" type="password" v-model="ruleForm.password" autoconplete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="ruleForm.status" placeholder="--请选择状态--">
          <el-option label="正常" value="1"></el-option>
          <el-option label="禁用" value="2"></el-option>
        </el-select>
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
  userEdit
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
        ],
        status: {
          required: true,
          message: '请选择状态',
          trigger: 'blur'
        }
      },
      ruleForm: {
        id: this.$route.params.id,
        name: '',
        mobile: '',
        password: '',
        status: ''
      }
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
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
