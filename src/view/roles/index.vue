<template>
    <div class="app-container">
        <div :className="'sub-navbar'">
            <template>
                <el-button v-show="userPower.user_role_reload != 0" style="margin-left: 10px;" type="success" @click="reloadRoutes()">刷新权限</el-button>
                <el-button v-show="userPower.user_role_add != 0" style="margin-left: 10px;" type="primary" @click="add(0)">新建角色</el-button>
            </template>
        </div>

        <div class="routes-main-container" style="margin-top:30px;">
            <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fit
                      highlight-current-row>
                <el-table-column align="center" label='ID'>
                    <template slot-scope="scope">
                        {{scope.row.id}}
                    </template>
                </el-table-column>
                <el-table-column label="角色名" width="200" align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.role_name}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="角色介绍">
                    <template slot-scope="scope">
                        <span>{{scope.row.role_desc}}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="created_at" label="创建时间" width="200">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span>{{scope.row.created_at}}</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" v-show="userPower.user_role_add != 0" @click="add(scope.row.id)">编辑</el-button>
                        <el-button size="mini" v-show="userPower.user_role_delete != 0" type="danger" @click="delRole(scope.row.id)">删除</el-button>
                        <el-button type="primary" v-show="userPower.user_role_routers_update != 0" size="mini" @click="setRoleId(scope.row.id)">配置路由</el-button>
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

        <el-dialog title="配置路由" :visible.sync="dialogTableVisible" :modal-append-to-body="false">
            <el-input style="width: 200px;" class="filter-item" placeholder="路由名"
                      v-model="router.form.searchText"></el-input>
            <el-button class="filter-item" type="primary" icon="el-icon-search" @click="searchRoleRouter">搜索
            </el-button>

            <el-table :data="router.list" border fit highlight-current-row style="margin-top:10px;">
                <el-table-column align="center" label='ID' width="90">
                    <template slot-scope="scope">
                        {{scope.row.id}}
                    </template>
                </el-table-column>
                <el-table-column align="center" label='路由名' width="120">
                    <template slot-scope="scope">
                        {{scope.row.name}}
                    </template>
                </el-table-column>
                <el-table-column align="center" label='路由规则'>
                    <template slot-scope="scope">
                        {{scope.row.route}}
                    </template>
                </el-table-column>
                <el-table-column align="center" label='操作' width="120">
                    <template slot-scope="scope">
                        <el-button v-if="scope.row.bound == true" type="danger" size="mini"
                                   @click="updateRouter(scope.row.id)">解绑路由
                        </el-button>
                        <el-button v-else type="primary" size="mini" @click="updateRouter(scope.row.id)">绑定路由
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination-container" :hidden="hideDialogPagination">
                <el-pagination
                background
                layout="prev, pager, next"
                @current-change="handleDialogRouterPageChange"
                :current-page="page"
                :page-size="router.form.size"
                :total="router.total">
                </el-pagination>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { getRoles, reloadRole, delRoles, getRouters, upRouter } from 'api/roles'
import { btnPower } from 'api/user'
import { ERR_OK } from '@/api/config'

export default {
  'name': 'role-lists',
  data () {
    return {
      userPower: {
        'user_role_reload': 0,
        'user_role_add': 0,
        'user_role_delete': 0,
        'user_role_routers_update': 0
      },
      list: [],
      listLoading: true,
      page: 1,
      total: 0, // table数据总条数
      pagesize: 10,
      searchForm: {
        size: 50
      },
      dialogTableVisible: false,
      hideDialogPagination: false,
      router: {
        list: [],
        total: 0,
        form: {
          size: 20,
          roleId: 0,
          searchText: '',
          page: 1
        }
      }
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    // 角色列表
    async fetchData () {
      let res = await getRoles()
      if (res.data.code == ERR_OK) {
        this.list = res.data.data.items
        this.total = res.data.data.total
        this.listLoading = false
      }
      let response = await btnPower(this.userPower)
      // 权限
      if (response.data.code == ERR_OK) {
        this.userPower = response.data.data
      }
    },
    // 跟新缓存
    async reloadRoutes () {
      let res = await reloadRole()
      console.log(res)
    },
    // 分页
    handleCurrentChange (currentPage) {
      Object.assign(this.searchForm, {
        page: currentPage
      })
      this.fetchData()
    },
    // 搜索
    setRoleId (id) {
      this.router.form.roleId = id
      this.router.form.searchText = ''
      this.router.form.page = 1
      this.searchRoleRouter()
    },
    // 搜索
    async searchRoleRouter () {
      let res = await getRouters(this.router.form)

      if (res.data.code == ERR_OK) {
        this.router.list = res.data.data.items
        this.router.total = res.data.data.total
        this.listLoading = false
      }
      this.dialogTableVisible = true
    },
    // 分页
    handleDialogRouterPageChange (val) {
      this.router.form.page = val
      this.searchRoleRouter()
    },
    async updateRouter (routerId) {
      const params = {
        roleId: this.router.form.roleId,
        routerId: routerId
      }
      let res = await upRouter(params)
      if (res.data.code == ERR_OK) {
        this.searchRoleRouter()
      }
    },
    // 添加
    add (id) {
      this.$router.push({
        path: `/user/role/add/${id}`
      })
    },
    // 删除角色
    delRole (id) {
      let self = this
      let param = {
        'id': id
      }
      this.$confirm('此操作将永久删除角色, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delRoles(param).then(res => {
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
