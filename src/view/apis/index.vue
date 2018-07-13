<template>
    <div class="app-container">
        <div class="ibox-title">
            <h3>Api 列表</h3>
        </div>
        <div class="ibox-content">
            <el-row style="margin-top: 30px;">
                <el-button type="primary" @click="handleAdd()">新建Api</el-button>
            </el-row>
            <el-table :data="apiData.data" border style="width: 100%; margin-top: 30px;">
                <el-table-column prop="name" label="名称"></el-table-column>
                <el-table-column prop="hosts" label="域"></el-table-column>
                <el-table-column prop="methods" label="发送方式"></el-table-column>
                <el-table-column prop="uris" label="匹配路径"></el-table-column>
                <el-table-column prop="upstream_url" label="转发地址"></el-table-column>
                <el-table-column prop="retries" label="失败重试次数"></el-table-column>
                <el-table-column prop="created_at" label="创建时间"></el-table-column>
                <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import { apiLists } from 'api/apis'
import { ERR_OK } from '@/api/config'
import { Message } from 'element-ui'

export default {
  name: 'apis',
  data () {
    return {
      apiData: []
    }
  },
  created () {
    this.apisLists()
  },
  methods: {
    // api列表
    async apisLists () {
      let response = await apiLists()
      this.loading = true
      if (response.data.code == ERR_OK) {
        this.apiData = response.data.data
        console.log(this.apiData.data)
        this.loading = false
      } else {
        Message(response.data.message)
      }
    },
    // 添加api
    handleAdd () {

    }
  }
}
</script>
