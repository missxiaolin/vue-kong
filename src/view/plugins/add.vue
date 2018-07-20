<template>
  <div class="components-container" style='height:100vh'>
    <div class="editor-container">
      <json-editor ref="jsonEditor" v-model="value"></json-editor>
    </div>
  </div>
</template>

<script>
import jsonEditor from 'base/jsonEditor'

export default {
  components: {jsonEditor},
  data () {
    return {
      value: {}
    }
  }
}
</script>

<style scoped>
.editor-container{
  position: relative;
  height: 100%;
}
</style>
