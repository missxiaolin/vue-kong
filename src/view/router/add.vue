<template>
    <div class="app-container">
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px">
            <el-form-item label="路由名字" prop="name">
                <el-input name="name" type="text" v-model="ruleForm.name" placeholder="路由名字"></el-input>
            </el-form-item>

            <el-form-item label="路由规则" prop="route">
                <el-input name="route" type="text" v-model="ruleForm.route" placeholder="路由规则"></el-input>
            </el-form-item>

            <el-form-item label="路由：" prop="type">
                <el-radio v-model="ruleForm.type" :label="1">系统路由</el-radio>
                <el-radio v-model="ruleForm.type" :label="0">自定义路由</el-radio>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { addRoute, infoRoute } from 'api/route'
import { ERR_OK } from '@/api/config'

export default {
  data () {
    return {
      rules: {
        name: [{
          required: true,
          message: '请输入路由名称',
          trigger: 'blur'
        }],
        route: {
          required: true,
          message: '请输入路由规则',
          trigger: 'blur'
        }
      },
      ruleForm: {
        id: this.$route.params.id,
        name: '',
        route: '',
        type: 1
      }
    }
  },
  created () {
    if (this.ruleForm.id != 0) {
      this.routeInfo()
    }
  },
  methods: {
    // 规则详情
    async routeInfo () {
      let params = {
        id: this.ruleForm.id
      }
      let res = await infoRoute(params)
      console.log(res)
      if (res.data.code != ERR_OK) {
        return
      }
      let info = res.data.data
      this.ruleForm.name = info.name
      this.ruleForm.route = info.route
      this.ruleForm.type = info.type
    },
    // 添加
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.add()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async add () {
      let res = await addRoute(this.ruleForm)
      if (res.data.code == ERR_OK) {
        this.$router.push({
          path: '/user/route/list'
        })
      }
    },
    // 重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
