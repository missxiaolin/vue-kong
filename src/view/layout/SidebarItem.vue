<template>
  <div class='menu-wrapper'>
    <template v-for="item in routes">
      <el-submenu :index="item.name" v-if="item.pid==0" v-bind:key='item.id'>
        <template slot="title">
          <i class="iconfont" :class="item.icon" v-if='item.icon'></i>
          <span>{{item.name}}</span>
        </template>
        <template v-for="child in item.children" v-if='child.is_hidden == 1 && child.pid == 1'>
          <sidebar-item class='nest-menu' v-if='child.children&&child.children.length>0' :routes='[child]' v-bind:key='child.id'></sidebar-item>
          <router-link v-else :to="child.res_uri" v-bind:key='child.id'>
            <el-menu-item :index="child.res_uri">
              <i v-if='child.icon' :class="child.icon" class="iconfont"></i>
              <span>{{child.name}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script>
import '@/common/font/iconfont.css'
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
</style>
