<template>
  <div class="app-container">
    <el-table :data="userData" stripe style="width: 100%">
      <el-table-column prop="name" label="姓名" width="300"></el-table-column>
      <el-table-column prop="mobile" label="手机号"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="created_at" label="创建时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDisable(scope.$index, scope.row)">禁用</el-button>
        </template>
      </el-table-column>
    </el-table>
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
      page: 1
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
    // 编辑
    handleEdit () { },
    // 禁用
    handleDisable () { }
  }
}
</script>
