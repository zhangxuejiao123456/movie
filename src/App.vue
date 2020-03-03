<template>
  <div>
    <router-view></router-view>
    <tabbar/>
    <h1>哈哈哈哈</h1>

  </div>
</template>

<script>
  import tabbar from "common/tabbar";
  import http from "utils/http.js";
 
  export default {
    components:{
      tabbar,
      
    },
    created(){
      http('get','/api/movieOnInfoList?cityId=10').then((data)=>{
        console.log(data)
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>