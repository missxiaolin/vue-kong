<template>
  <div class="components-container" style='height:100vh'>
    <div class="editor-container">
      <json-editor ref="jsonEditor" v-model="value"></json-editor>
    </div>
  </div>
</template>

<script>
import jsonEditor from 'base/jsonEditor'
const jsonData = '[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"}]'

export default {
  components: {jsonEditor},
  data () {
    return {
      value: JSON.parse(jsonData)
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
