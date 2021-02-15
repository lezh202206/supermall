<template>
  <div id="home">
<nav-bar class="home-nav">
  <div slot="center">购物街</div>
</nav-bar>
<home-swiper :banners="banners"/>
<home-recommend-view></home-recommend-view>
  </div>
</template> 
<script>
//导航栏
import NavBar from 'components/common/navbar/NarBar'
//轮播图
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommendView from './childComps/HomeRecommendView.vue' 
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
    NavBar,
    HomeSwiper,
    HomeRecommendView
  
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