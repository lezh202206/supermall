<template>
  <div id="home">
<nav-bar class="home-nav">
  <div slot="center">购物街</div>
</nav-bar>
<home-swiper :banners="banners"/>
<home-recommend-view :recommends="recommends"></home-recommend-view>
<feature-view/>
<tab-control :titles="['流行','新款','精选']" class="tab-control"/>
<goods-list></goods-list>
<ul>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
  </div>
</template> 
<script>
//导航栏
import NavBar from 'components/common/navbar/NarBar'
//轮播图
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommendView from './childComps/HomeRecommendView.vue' 
import FeatureView from './childComps/FeatureView.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import {getHomeMultidata ,getHomeGoods} from 'network/home'



export default {
  name:"Home",
  data(){
    return {
      banners:[],
      recommends:[],
      // 页码 对应数据
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      }
    }
  }, 
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
    created(){
      // 1.请求多个数据
        this.getHomeMultidata()
    //  2. 请求商品数据
       this.getHomeGoods('pop')
       this.getHomeGoods('new')
       this.getHomeGoods('sell')
  },
  methods:{
    getHomeMultidata(){
     getHomeMultidata().then(res=>{
      // console.log(res);
      this.banners=res.data.banner.list
      this.recommends=res.data.recommend.list
    })
    },
   getHomeGoods(type){
     const page=this.goods[type].page + 1
     getHomeGoods(type,page).then(res=>{
      //  把请求的数据push进goods数组 并且页码加一
       this.goods[type].list.push(...res.data.list)
       this.goods[type].page += 1
     })
   }
  } 
}
</script>
<style scoped>

#home{
  /* 解决脱离标准流 */
    padding-top: 44px;
}
.home-nav{
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top:0 ;
  left: 0;
  right: 0;
  z-index: 9;

}
.tab-control{
  position: sticky;
  top: 44px;
}
</style>