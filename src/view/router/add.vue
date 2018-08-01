<template>
    <div class="app-container">
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px">
            <el-form-item label="资源类型：" prop="pid">
              <el-select v-model="ruleForm.pid" size="small" :disabled="isEdit" placeholder="请选择">
                  <el-option
                  v-for="item in resTypeList"
                  :key="item.resType"
                  :label="item.resTypeDesc"
                  :value="item.resType">
                  </el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="上级资源名称：">
              <template v-if="ruleForm.pid != 0">
                <el-popover ref="searchPostPopover" placement="bottom-start" width="360" v-model="resPidVisible">
                    <el-input placeholder="请输入上级资源名称" :autofocus='true' size="small" v-model="searchForm.name">
                        <el-button slot="append" icon="el-icon-search" @click="handleGetResPid"></el-button>
                    </el-input>
                    <div class="search-group" v-if="searchList.length > 0">
                        <dl v-for="(item ,index) in searchList" :key="index" @click="chooseResPid(item)">
                            <dd>资源名称：{{item.name}}</dd>
                        </dl>
                    </div>
                    <div class="no-data-show" v-else>
                        {{resPidTipMsg}}
                    </div>
                </el-popover>
                <div  v-popover:searchPostPopover  @click="resPidVisible = true; resPidTipMsg =''; searchForm.name ='';searchList =[]">
                  <el-input v-model.trim="searchName"  size="small" placeholder="上级资源名称" readonly></el-input>
                </div>
              </template>

              <template v-else>
                  <el-input v-model.trim="searchName"  size="small" placeholder="上级资源名称信息" disabled></el-input>
              </template>
            </el-form-item>

            <el-form-item label="权限编码：" prop="code">
                <el-input name="code" type="text" v-model="ruleForm.code" placeholder="编码"></el-input>
            </el-form-item>

            <el-form-item label="名称：" prop="name">
                <el-input name="name" type="text" v-model="ruleForm.name" placeholder="路由名字"></el-input>
            </el-form-item>

            <el-form-item label="路由规则：" prop="route">
                <el-input name="route" type="text" v-model="ruleForm.route" placeholder="路由规则"></el-input>
            </el-form-item>

            <el-form-item label="图标：" prop="icon">
                <el-input name="icon" type="text" v-model="ruleForm.icon" placeholder="图标"></el-input>
            </el-form-item>

            <el-form-item label="目标地址：" prop="res_uri">
                <el-input name="res_uri" type="text" v-model="ruleForm.res_uri" placeholder="目标地址"></el-input>
            </el-form-item>

            <el-form-item label="是否显示：" prop="is_hidden">
              <el-radio v-model="ruleForm.is_hidden" :label="0">否</el-radio>
              <el-radio v-model="ruleForm.is_hidden" :label="1">是</el-radio>
            </el-form-item>

            <el-form-item label="列表是否显示：" prop="noDropdown">
              <el-radio v-model="ruleForm.noDropdown" :label="0">否</el-radio>
              <el-radio v-model="ruleForm.noDropdown" :label="1">是</el-radio>
            </el-form-item>

            <el-form-item label="路由：" prop="type">
                <el-radio v-model="ruleForm.type" :label="1">系统路由</el-radio>
                <el-radio v-model="ruleForm.type" :label="0">自定义路由</el-radio>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { addRoute, infoRoute, routeSearch } from 'api/route'
import { ERR_OK } from '@/api/config'

export default {
  data () {
    return {
      rules: {
        name: [{
          required: true,
          message: '请输入路由名称',
          trigger: 'blur'
        }],
        code: {
          required: true,
          message: '请输入编码',
          trigger: 'blur'
        }
      },
      isEdit: false,
      resPidVisible: false,
      resTypeList: [
        {resTypeDesc: '模块', resType: 0},
        {resTypeDesc: '页面', resType: 1},
        {resTypeDesc: '按钮', resType: 2}
      ],
      resPidTipMsg: '',
      searchForm: {
        name: '',
        pid: 0
      },
      searchList: [],
      searchName: '',
      ruleForm: {
        id: this.$route.params.id,
        is_hidden: 0,
        noDropdown: 0,
        icon: '',
        name: '',
        route: '',
        res_uri: '',
        pid: 0,
        level: 0,
        code: '',
        type: 1
      }
    }
  },
  created () {
    if (this.ruleForm.id != 0) {
      this.routeInfo()
    }
  },
  methods: {
    // 规则详情
    async routeInfo () {
      let params = {
        id: this.ruleForm.id
      }
      let res = await infoRoute(params)
      console.log(res)
      if (res.data.code != ERR_OK) {
        return
      }
      let info = res.data.data
      this.ruleForm.name = info.name
      this.ruleForm.route = info.route
      this.ruleForm.type = info.type
      this.ruleForm.code = info.code
      this.ruleForm.pid = info.pid
      this.ruleForm.is_hidden = info.is_hidden
      this.ruleForm.icon = info.icon
      this.ruleForm.res_uri = info.res_uri
      this.ruleForm.level = info.level
      this.ruleForm.noDropdown = info.noDropdown
      // 上级元素name
      if (info.level) {
        this.levelName(info.level)
      }
    },
    async levelName (levelId) {
      let params = {
        id: levelId
      }
      let res = await infoRoute(params)
      if (res.data.code != ERR_OK) {
        return
      }
      let info = res.data.data
      this.searchName = info.name
    },
    // 添加
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.add()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async add () {
      let res = await addRoute(this.ruleForm)
      if (res.data.code == ERR_OK) {
        this.$router.push({
          path: '/user/route/list'
        })
      }
    },
    // 重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // 搜索
    async handleGetResPid () {
      let res = await routeSearch(this.searchForm)
      if (res.data.code != ERR_OK) {
        return
      }
      this.searchList = res.data.data
      if (this.searchList.length == 0) {
        this.resPidTipMsg = '无搜索结果'
      }
    },
    chooseResPid (item) {
      this.ruleForm.level = item.id
      this.searchName = item.name
      this.resPidVisible = false
    }
  }
}
</script>

<style>
.no-data-show{ width: 100%; padding-top: 15px; text-align: center; color: #999}
.search-group { max-height: 350px; margin-top: 15px; overflow-y: auto; }

.search-group dl {
    border-bottom: 1px dotted #eee;
    padding: 10px ;
    line-height: 24px;
    cursor: pointer
}
.search-group dl:hover{ background: #F2F6FC}

.search-group dl:last-child {
    border-bottom: 0
}
</style>
