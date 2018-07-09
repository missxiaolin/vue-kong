<template>
  <div class="app-container">
    <div class="ibox-title">
      <h3>用户列表</h3>
    </div>
    <div class="ibox-content">
      <el-form ref="searchForm" :model="searchForm" label-width="80px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="手机号：" prop="mobile">
              <el-input v-model="searchForm.mobile"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="状态：" prop="status">
              <el-select v-model="searchForm.status" placeholder="请选择状态" style="width:100%">
                <el-option label="正常" value="1"></el-option>
                <el-option label="禁用" value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="日期：">
              <el-date-picker type="daterange" v-model="dateTime" @change="dateChangebirthday" format="yyyy-MM-dd" value-format="yyyy-MM-dd" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-button type="info" @click="resetForm('searchForm')">重置</el-button>
          <el-button type="primary" @click="submitForm('searchForm')">搜索</el-button>
        </el-row>
      </el-form>

      <el-row style="margin-top: 30px;">
        <el-button type="primary">
          <router-link :to='{name:"用户编辑", params:{ id:0 }}'>新建用户</router-link>
        </el-button>
      </el-row>

      <el-table :data="userData.items" border style="width: 100%; margin-top: 30px;">
        <el-table-column prop="name" label="姓名" width="300"></el-table-column>
        <el-table-column prop="mobile" label="手机号"></el-table-column>
        <el-table-column prop="status" label="状态" :formatter="stateFormat"></el-table-column>
        <el-table-column prop="created_at" label="创建时间"></el-table-column>
        <el-table-column prop="updated_at" label="结束时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
            <el-button size="mini" v-show="scope.row.status==0" type="success" @click="handleDisable(scope.$index, scope.row.id)">正常</el-button>
            <el-button size="mini" v-show="scope.row.status==1" type="danger" @click="handleDisable(scope.$index, scope.row.id)">禁用</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row type="flex" justify="center" style="margin-top: 30px;">
        <el-pagination background layout="prev, pager, next" :total="total" @current-change="handleCurrentChange" :current-page="page"></el-pagination>
      </el-row>
    </div>
  </div>
</template>

<script>
import {
  userLists,
  userStatus
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
      dateTime: '',
      userData: [],
      searchForm: {
        status: '',
        mobile: '',
        create_start: '',
        create_end: '',
        size: 1
      },
      page: 1,
      total: 0, // table数据总条数
      pagesize: 10
    }
  },
  created () {
    this.userLists()
  },
  methods: {
    // 时间格式
    dateChangebirthday (val) {
      this.searchForm.create_start = val[0]
      this.searchForm.create_end = val[1]
    },
    // 重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.userLists()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async userLists () {
      let response = await userLists(this.searchForm)
      this.loading = true
      if (response.data.code == ERR_OK) {
        this.userData = response.data.data
        this.total = response.data.data.total * 10
        this.loading = false
      } else {
        Message(response.data.message)
      }
    },
    stateFormat (row, column) {
      if (row.status === 1) {
        return '正常'
      } else if (row.status === 0) {
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
    async handleDisable (index, id) {
      let params = {
        id: id
      }
      let response = await userStatus(params)
      this.loading = true
      if (response.data.code == ERR_OK) {
        this.userData.items[index].status = !this.userData.items[index].status ? 1 : 0
        this.loading = false
      } else {
        Message(response.data.message)
      }
    },
    handleCurrentChange: function (currentPage) {
      let params = Object.assign(this.searchForm, { page: currentPage })
      this.userLists(params)
    }
  }
}
</script>
