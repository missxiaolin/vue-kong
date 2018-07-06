<template>
  <div class="app-container">
    <div class="ibox-title">
      <h3>用户列表</h3>
    </div>
    <div class="ibox-content">
      <el-form ref="form" label-width="80px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="姓名">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="手机号">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="状态">
              <el-select v-model="form.region" placeholder="请选择状态" style="width:100%">
                <el-option label="正常" value="1"></el-option>
                <el-option label="禁用" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-button type="info">重置</el-button>
          <el-button type="primary">搜索</el-button>
        </el-row>
      </el-form>

      <el-row style="margin-top: 30px;">
        <el-button type="primary">
          <router-link :to='{name:"用户编辑", params:{ id:0 }}'>新建用户</router-link>
        </el-button>
      </el-row>

      <el-table :data="userData" border style="width: 100%; margin-top: 30px;">
        <el-table-column prop="name" label="姓名" width="300 "></el-table-column>
        <el-table-column prop="mobile" label="手机号"></el-table-column>
        <el-table-column prop="status" label="状态" :formatter="stateFormat "></el-table-column>
        <el-table-column prop="created_at" label="创建时间 "></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDisable(scope.row.id)">禁用</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {
  userLists
} from 'api/user'
import {
  ERR_OK
} from '@/api/config'
import {
  Message
} from 'element-ui'

export default {
  name: 'user',
  data () {
    return {
      userData: [],
      page: 1,
      form: {
        region: ''
      }
    }
  },
  created () {
    this.userLists()
  },
  methods: {
    async userLists () {
      let params = {
        page: this.page
      }
      let response = await userLists(params)
      this.loading = true
      if (response.data.code == ERR_OK) {
        this.userData = response.data.data.items
        this.loading = false
      } else {
        Message(response.data.message)
      }
    },
    stateFormat (row, column) {
      if (row.status === 1) {
        return '正常'
      } else if (row.status === 2) {
        return '禁用'
      }
    },
    // 编辑
    handleEdit (id) {
      this.$router.push({
        path: `/user/edit/${id}`
      })
    },
    // 禁用
    handleDisable () { }
  }
}
</script>
