<template>
    <div class="app-container">
        <div class="ibox-title">
            <h3>路由列表</h3>
        </div>

        <div :className="'sub-navbar'" v-show="userPower.user_route_add != 0">
            <template>
                <el-button type="primary" @click="addRoute(0)">新建权限</el-button>
            </template>
        </div>

        <div class="routes-main-container" style="margin-top:20px">
            <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fit
                      highlight-current-row>
                <el-table-column align="center" label='ID' width="95">
                    <template slot-scope="scope">
                        {{scope.row.id}}
                    </template>
                </el-table-column>
                <el-table-column label="路由名" width="200" align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="路由规则">
                    <template slot-scope="scope">
                        <span>{{scope.row.route}}</span>
                    </template>
                </el-table-column>
                <el-table-column class-name="status-col" label="路由等级" width="200" align="center">
                    <template slot-scope="scope">
                        <el-tag :type="scope.row.type | statusFilter">{{scope.row.typeName}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="created_at" label="创建时间" width="200">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span>{{scope.row.created_at}}</span>
                    </template>
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" v-show="userPower.user_route_add != 0" @click="addRoute(scope.row.id)">编辑</el-button>
                        <el-button size="mini" v-show="userPower.user_route_delete != 0" type="danger" @click="del(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <el-row type="flex" justify="center" style="margin-top: 30px;">
                <el-pagination
                background
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :current-page="page"
                :page-size="searchForm.size"
                :total="total">
                </el-pagination>
            </el-row>
        </div>
    </div>
</template>

<script>

import { getRoutes, delRoute } from 'api/route'
import { btnPower } from 'api/user'
import { ERR_OK } from '@/api/config'

export default {
  'name': 'route',
  data () {
    return {
      userPower: {
        'user_route_add': 0,
        'user_route_delete': 0
      },
      list: [],
      listLoading: true,
      page: 1,
      total: 0, // table数据总条数
      pagesize: 10,
      searchForm: {
        size: 50
      }
    }
  },
  // 过滤
  filters: {
    statusFilter (status) {
      const statusMap = ['success', 'danger']
      return statusMap[status]
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    // 路由列表
    async fetchData () {
      let res = await getRoutes(this.searchForm)
      let response = await btnPower(this.userPower)
      if (res.data.code == ERR_OK) {
        this.list = res.data.data.items
        this.total = res.data.data.total
        this.listLoading = false
      }
      // 权限
      if (response.data.code == ERR_OK) {
        this.userPower = response.data.data
      }
    },
    // 分页
    handleCurrentChange (currentPage) {
      Object.assign(this.searchForm, {
        page: currentPage
      })
      this.fetchData()
    },
    // 添加
    addRoute (id) {
      this.$router.push({
        path: `/user/route/add/${id}`
      })
    },
    // 删除
    del (id) {
      let self = this
      let param = {
        'id': id
      }
      this.$confirm('此操作将永久删除权限, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delRoute(param).then(res => {
          console.log(res)
          if (res.data.code == ERR_OK) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            self.fetchData()
          }
        })
      })
    }
  }
}

</script>
