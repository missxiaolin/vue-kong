<template>
    <div class="app-container">
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px">
            <el-form-item label="角色名" prop="roleName">
                <el-input name="roleName" type="text" v-model="ruleForm.roleName" placeholder="角色名"></el-input>
            </el-form-item>

            <el-form-item label="角色介绍" prop="roleDesc">
                <el-input name="roleDesc" type="text" v-model="ruleForm.roleDesc" placeholder="角色介绍"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
                <el-button @click="resetForm('ruleForm')">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { addRoles, infoRoles } from 'api/roles'
import { ERR_OK } from '@/api/config'

export default {
  'name': 'role-add',
  data () {
    return {
      rules: {
        roleName: [{
          required: true,
          message: '请输入角色名称',
          trigger: 'blur'
        }],
        roleDesc: {
          required: true,
          message: '角色介绍必填',
          trigger: 'blur'
        }
      },
      ruleForm: {
        id: this.$route.params.id,
        roleName: '',
        roleDesc: ''
      }
    }
  },
  created () {
    if (this.ruleForm.id != 0) {
      this.info()
    }
  },
  methods: {
    // 获取详情
    async info () {
      let params = {
        id: this.ruleForm.id
      }
      let res = await infoRoles(params)
      console.log(res)
      if (res.data.code != ERR_OK) {
        return
      }
      let info = res.data.data
      this.ruleForm.roleName = info.role_name
      this.ruleForm.roleDesc = info.role_desc
    },
    // 验证
    onSubmit (formName) {
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
    // 添加
    async add () {
      let res = await addRoles(this.ruleForm)
      if (res.data.code == ERR_OK) {
        this.$router.push({
          path: '/user/role/list'
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
