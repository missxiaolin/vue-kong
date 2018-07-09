<template>
  <div class='menu-wrapper'>
    <template v-for="item in routes">
      <router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0" :to="item.path+'/'+item.children[0].path" v-bind:key='item.id' ƒ>
        <el-menu-item :index="item.path+'/'+item.children[0].path" class='submenu-title-noDropdown'>
          <i class="iconfont" :class="item.icon" v-if='item.icon'></i>
          <span>{{item.children[0].name}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden" v-bind:key='item.id'>
        <template slot="title">
          <i class="iconfont" :class="item.icon" v-if='item.icon'></i>
          <span>{{item.name}}</span>
        </template>
        <template v-for="child in item.children" v-if='!child.hidden'>
          <sidebar-item class='nest-menu' v-if='child.children&&child.children.length>0' :routes='[child]' v-bind:key='child.id'></sidebar-item>
          <router-link v-else :to="item.path+'/'+child.path" v-bind:key='child.id'>
            <el-menu-item :index="item.path+'/'+child.path">
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
