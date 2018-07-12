<template>
  <div class="app-container">
    <div class="ibox-title">
      <h3>消费者列表</h3>
    </div>
    <div class="ibox-content">
      <el-row style="margin-top: 30px;">
        <!-- Form -->
        <el-button type="primary" @click="popup(0)">新建消费者</el-button>

        <el-dialog :title="title" :visible.sync="dialogFormVisible" :modal-append-to-body="false" width="30%">
          <el-form :model="ruleForm" label-position='top' :rules="rules" ref="ruleForm">
            <el-form-item label="消费者ID：" prop="custom_id" label-width="120px">
              <el-input v-model="ruleForm.custom_id"></el-input>
            </el-form-item>
            <el-form-item label="用户名称：" prop="username" label-width="120px">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
          </div>
        </el-dialog>

      </el-row>

      <el-table :data="consumerData.data" border style="width: 100%; margin-top: 30px;">
        <el-table-column prop="custom_id" label="ID"></el-table-column>
        <el-table-column prop="username" label="消费者名称" width="300"></el-table-column>
        <el-table-column prop="created_at" label="创建时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="popup(scope.row.id,scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {
  lists,
  add,
  updated
} from 'api/consumer'
import {
  ERR_OK
} from '@/api/config'
import {
  Message
} from 'element-ui'

export default {
  name: 'consumer',
  data () {
    return {
      title: '',
      dialogFormVisible: false,
      rules: {
        custom_id: {
          required: false,
          message: '请输入消费者ID',
          trigger: 'blur'
        },
        username: {
          required: true,
          message: '请输入用户名称',
          trigger: 'blur'
        }
      },
      ruleForm: {
        id: null,
        custom_id: '',
        username: ''
      },
      consumerData: []
    }
  },
  created () {
    this.consumerLists()
  },
  methods: {
    async consumerLists () {
      let response = await lists(this.searchForm)
      this.loading = true
      if (response.data.code == ERR_OK) {
        this.consumerData = response.data.data
        this.loading = false
      } else {
        Message(response.data.message)
      }
    },
    popup (id, row = '') {
      this.dialogFormVisible = true
      if (id == 0) {
        this.title = '新建消费者'
        this.ruleForm.id = null
        this.ruleForm.custom_id = ''
        this.ruleForm.username = ''
      } else {
        this.title = '编辑消费者'
        this.ruleForm.id = row.id
        this.ruleForm.custom_id = row.custom_id
        this.ruleForm.username = row.username
      }
    },
    submitForm (formName) {
      let self = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (!this.ruleForm.id) {
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
    async request (params) {
      let response = await params(this.ruleForm)
      this.loading = true
      if (response.data.code == ERR_OK) {
        this.dialogFormVisible = false
        this.consumerLists()
        this.loading = false
      } else {
        Message(response.data.message)
      }
    }
  }
}
</script>
