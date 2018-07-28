<template>
    <div class="app-container">
        <div :className="'sub-navbar'">
            <template>
                <el-button style="margin-left: 10px;" type="success" @click="reloadRoutes()">刷新权限</el-button>
                <el-button style="margin-left: 10px;" type="primary" @click="add(0)">新建角色</el-button>
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
                        <el-button size="mini" @click="add(scope.row.id)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="delRole(scope.row.id)">删除</el-button>
                        <el-button type="primary" size="mini" @click="setRoleId(scope.row.id)">配置路由</el-button>
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
                      v-model="router.searchText"></el-input>
            <el-select style="width: 140px" class="filter-item" v-model="router.searchType">
                <el-option v-for="v in router.searchTypes" :label='v.label' :value="v.key" :key='v.key'></el-option>
            </el-select>
            <el-button class="filter-item" type="primary" icon="el-icon-search" @click="searchRoleRouter">搜索
            </el-button>

            <el-table :data="router.list" border fit highlight-current-row>
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
                <el-pagination background @current-change="handleDialogRouterPageChange"
                               :current-page.sync="router.pageIndex" :page-size="router.pageSize"
                               layout="total, prev, pager, next" :total="router.total">
                </el-pagination>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { getRoles, reloadRole } from 'api/roles'
import { ERR_OK } from '@/api/config'

export default {
  'name': 'role-lists',
  data () {
    return {
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
        list: []
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
    setRoleId (id) {
    //   this.router.roleId = id
    //   this.router.pageIndex = 1
    //   this.router.searchText = ''
    //   this.router.searchType = 0
    //   this.searchRoleRouter()
      this.dialogTableVisible = true
    },
    searchRoleRouter () {

    },
    handleDialogRouterPageChange (val) {
      this.router.pageIndex = val
      this.searchRoleRouter()
    },
    // 添加
    add (id) {
      this.$router.push({
        path: `/user/role/add/${id}`
      })
    },
    // 删除角色
    delRole () {

    }
  }
}
</script>
