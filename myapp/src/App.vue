<template>
  <router-view/>
</template>
<script>
import {provide} from "vue"
//视频当中时{provider}
import * as echarts from "echarts"
import axios from "axios"

// 设置基准路径（本地）
// axios.defaults.baseURL="http://118.178.233.180:8888/"
axios.defaults.baseURL="http://localhost:8888/"
export default {
  setup(){
    // provider("名字随便起","传递的内容")
    provide("echarts",echarts)
    provide("axios",axios)
  }
}
</script>

<style lang="less">
body{
  background: url("~@/assets/blue.jpg") top center no-repeat;
  
}
*{
  margin:0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
