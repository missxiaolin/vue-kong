<template>
    <div class="app-container">
        <div class="ibox-title">
            <h3>Api 列表</h3>
        </div>

        <div class="ibox-content">
            <el-row style="margin-top: 30px;">
                <el-button type="primary" @click="handleAdd()">新建路由</el-button>
            </el-row>

            <el-table :data="routesData.data" border style="width: 100%; margin-top: 30px;">
                <el-table-column label="发送方式">
                    <template slot-scope="scope">
                        <span v-for="(item,index) in scope.row.methods" :key="index">{{item}}<em v-if="index != scope.row.methods.length - 1">，</em></span>
                    </template>
                </el-table-column>
                <el-table-column label="匹配路径">
                    <template slot-scope="scope">
                        <span v-for="(item,index) in scope.row.protocols" :key="index">{{item}}<em v-if="index != scope.row.protocols.length - 1">，</em></span>
                    </template>
                </el-table-column>
                <el-table-column prop="service.id" label="服务id"></el-table-column>
                <el-table-column prop="hosts" label="域"></el-table-column>
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
import { routeLists } from 'api/routes'
import { ERR_OK } from '@/api/config'
import { Message } from 'element-ui'

export default {
  name: 'routes',
  data () {
    return {
      routesData: []
    }
  },
  created () {
    this.apisLists()
  },
  methods: {
    // 路由列表
    async apisLists () {
      let response = await routeLists()
      this.loading = true
      if (response.data.code == ERR_OK) {
        this.routesData = response.data.data
        console.log(this.routesData.data)
        this.loading = false
      } else {
        Message(response.data.message)
      }
    }
  }
}
</script>
