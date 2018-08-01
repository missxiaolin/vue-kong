<template>
  <el-menu background-color="#324157" text-color="#bfcbd9" mode="vertical" unique-opened :default-active="$route.path" :collapse="opened">
    <sidebar-item :routes='permission_routers'></sidebar-item>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import { ERR_OK } from '@/api/config'
// import { asyncRouterMap } from 'router'
import { userPower } from 'api/user'

export default {
  data () {
    return {
      permission_routers: [],
      isOpened: true
    }
  },
  created () {
    // this.permission_routers = asyncRouterMap
    this.isOpened = this.opened
    this.power()
  },
  components: {
    SidebarItem
  },
  methods: {
    // 判断伸缩
    isCollapse () {
      let that = this
      setTimeout(() => {
        that.isOpened = !this.opened
      }, 10)
    },
    // 权限列表
    async power () {
      let res = await userPower()
      if (res.data.code != ERR_OK) {
        return
      }
      this.permission_routers = res.data.data
      console.log(this.permission_routers)
    }
  },
  computed: {
    ...mapGetters(['opened'])
  },
  watch: {
    opened () {
      this.isCollapse()
    }
  }
}
</script>
