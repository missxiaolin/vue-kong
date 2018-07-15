<template>
    <div class="app-container">
        <div class="ibox-title">
            <h3>插件列表</h3>
        </div>

        <div class="ibox-content">
            <el-row style="margin-top: 30px;">
                <el-button type="primary" @click="handleAdd()">新建插件</el-button>
            </el-row>

            <el-table :data="pluginssData.data" border style="width: 100%; margin-top: 30px;">
                <el-table-column prop="name" label="插件名称"></el-table-column>
                <el-table-column label="是否启用">
                    <template slot-scope="scope">
                        <span v-if="scope.row.enabled">启动</span>
                        <span v-else>禁止</span>
                    </template>
                </el-table-column>
                <el-table-column prop="consumer_id" label="使用者Id"></el-table-column>
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
import { pluginsLists, pluginsDelete } from 'api/plugins'
import { ERR_OK } from '@/api/config'
import { Message } from 'element-ui'

export default {
  name: 'routes',
  data () {
    return {
      pluginssData: []
    }
  },
  created () {
    this.pluginsLists()
  },
  methods: {
    // 插件列表
    async pluginsLists () {
      let response = await pluginsLists()
      this.loading = true
      if (response.data.code == ERR_OK) {
        this.pluginssData = response.data.data
        this.loading = false
      } else {
        Message(response.data.message)
      }
    },
    // 添加插件
    handleAdd () {
      this.$router.push({
        path: `/plugins/add`
      })
    },
    // 编辑插件
    handleEdit () {

    },
    // 删除插件
    handleDelete (id) {
      let self = this
      let param = {
        'id': id
      }
      this.$confirm('此操作将永久删除服务, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        pluginsDelete(param).then(res => {
          console.log(res)
          if (res.data.code == ERR_OK) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            self.pluginsLists()
          }
        })
      })
    }
  }
}
</script>
