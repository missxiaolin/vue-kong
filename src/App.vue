<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css'
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "~common/css/index.scss"; // 全局自定义的css样式
</style>
