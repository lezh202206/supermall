<template>
  <div id="home">
<nav-bar class="home-nav">
  <div slot="left"></div>
  <div slot="center">购物车</div>
    <div slot="right"></div>
   <div></div>
</nav-bar>
  </div>
</template>
<script>

import NavBar from 'components/common/navbar/NarBar'
import {getHomeMultidata} from 'network/home'
export default {
  name:"Home",
  data(){
    return {
      banners:[],
      recommends:[]
    }
  },
  components:{
    NavBar
  },
  created(){
    getHomeMultidata().then(res=>{
      console.log(res);
      this.banners=res.data.banner
      this.recommends=res.data.recommend
      
    })
  }
}
</script>
<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
</style>