<template>
  <div class="app-container">
    <div class="ibox-title">
      <h3>服务列表</h3>
    </div>
    <div class="ibox-content">
      <el-row style="margin-top: 30px;">
        <el-button type="primary" v-show="userPower.kong_service_add != 0" @click="handleAdd()">新建服务</el-button>
      </el-row>
      <el-table :data="serviceData.data" border style="min-width: 100vw; margin-top: 30px;">
        <el-table-column prop="id" label="服务Id"></el-table-column>
        <el-table-column prop="protocol" label="通信协议"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="host" label="主机"></el-table-column>
        <el-table-column prop="path" label="请求路径"></el-table-column>
        <el-table-column prop="port" label="服务器端口"></el-table-column>
        <el-table-column prop="retries" label="失败重试次数"></el-table-column>
        <el-table-column prop="connect_timeout" label="连接超时时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" v-show="userPower.kong_service_upload != 0" @click="handleEdit(scope.row.id)">编辑</el-button>
            <el-button size="mini" v-show="userPower.kong_service_delete != 0" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { serviceLists, serviceDelete } from 'api/service'
import { btnPower } from 'api/user'
import { ERR_OK } from '@/api/config'
import { Message } from 'element-ui'

export default {
  name: 'service',
  data () {
    return {
      userPower: {
        'kong_service_add': 0,
        'kong_service_upload': 0,
        'kong_service_delete': 0
      },
      serviceData: [],
      searchForm: {
      },
      page: 1,
      total: 0, // table数据总条数
      pagesize: 10
    }
  },
  created () {
    this.serviceLists()
  },
  methods: {
    // 重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.serviceLists()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async serviceLists () {
      let response = await serviceLists(this.searchForm)
      let res = await btnPower(this.userPower)
      this.loading = true
      if (response.data.code == ERR_OK) {
        this.serviceData = response.data.data
        this.total = response.data.data.total * 10
        this.loading = false
      } else {
        Message(response.data.message)
      }
      // 权限
      if (res.data.code == ERR_OK) {
        this.userPower = res.data.data
      }
    },
    // 编辑
    handleEdit (id) {
      this.$router.push({
        path: `/kong/service/edit/${id}`
      })
    },
    // 服务删除
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
        serviceDelete(param).then(res => {
          console.log(res)
          if (res.data.code == ERR_OK) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            self.serviceLists()
          }
        })
      })
    },
    // 添加
    handleAdd () {
      this.$router.push({
        path: `/kong/service/add`
      })
    },
    handleCurrentChange: function (currentPage) {
      let params = Object.assign(this.searchForm, { page: currentPage })
      this.userLists(params)
    }
  }
}
</script>

<style scoped>
.ibox-content {
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
}
</style>
