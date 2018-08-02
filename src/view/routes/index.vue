<template>
  <div class="app-container">
    <div class="ibox-title">
      <h3>路由列表</h3>
    </div>

    <div class="ibox-content">
      <el-row style="margin-top: 30px;">
        <el-button type="primary" v-show="userPower.kong_routes_add != 0" @click="handleAdd()">新建路由</el-button>
      </el-row>

      <el-table :data="routesData.data" border style="width: 100%; margin-top: 30px;">
        <el-table-column prop="id" label="路由Id"></el-table-column>

        <el-table-column label="发送方式">
          <template slot-scope="scope">
            <span v-for="(item,index) in scope.row.methods" :key="index">{{item}}
              <em v-if="index != scope.row.methods.length - 1">，</em>
            </span>
          </template>
        </el-table-column>

        <el-table-column label="匹配方式">
          <template slot-scope="scope">
            <span v-for="(item,index) in scope.row.protocols" :key="index">{{item}}
              <em v-if="index != scope.row.protocols.length - 1">，</em>
            </span>
          </template>
        </el-table-column>

        <el-table-column prop="paths" label="匹配路径"></el-table-column>

        <el-table-column prop="hosts" label="域"></el-table-column>
        <el-table-column prop="created_at" label="创建时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" v-show="userPower.kong_routes_upload != 0" @click="handleEdit(scope.row.id)">编辑</el-button>
            <el-button size="mini" v-show="userPower.kong_routes_delete != 0" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { routeLists, routesDelete } from 'api/routes'
import { btnPower } from 'api/user'
import { ERR_OK } from '@/api/config'
import { Message } from 'element-ui'

export default {
  name: 'routes-list',
  data () {
    return {
      userPower: {
        'kong_routes_add': 0,
        'kong_routes_upload': 0,
        'kong_routes_delete': 0
      },
      routesData: []
    }
  },
  created () {
    this.routesLists()
  },
  methods: {
    // 路由列表
    async routesLists () {
      let response = await routeLists()
      let res = await btnPower(this.userPower)
      this.loading = true
      if (response.data.code == ERR_OK) {
        this.routesData = response.data.data
        console.log(this.routesData.data)
        this.loading = false
      } else {
        Message(response.data.message)
      }
      // 权限
      if (res.data.code == ERR_OK) {
        this.userPower = res.data.data
      }
    },
    // 添加
    handleAdd () {
      this.$router.push({
        path: `/kong/routes/add`
      })
    },
    // 编辑
    handleEdit (id) {
      this.$router.push({
        path: `/kong/routes/edit/${id}`
      })
    },
    // 删除
    async handleDelete (id) {
      let self = this
      let param = {
        'id': id
      }
      this.$confirm('此操作将永久删除服务, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        routesDelete(param).then(res => {
          if (res.data.code == ERR_OK) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            self.routesLists()
          }
        })
      })
    }
  }
}
</script>
