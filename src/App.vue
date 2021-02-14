<template>
  <div id="app">
    <router-view/>
<maintabbar></maintabbar>
  </div>
</template>
<script>
import Maintabbar from 'components/content/mainTabbar/MainTabBar.vue'


export default {
  name: 'App',
  components:{
    Maintabbar
  }
}
</script>


<style scoped>
@import "assets/css/base.css";

</style>

