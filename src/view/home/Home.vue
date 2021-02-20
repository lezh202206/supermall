<template>
  <div id="home">
<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
<scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
  <home-swiper :banners="banners"/>
<home-recommend-view :recommends="recommends"></home-recommend-view>
<feature-view/>
<tab-control :titles="['流行','新款','精选']" class="tab-control"
@spanClick="spanClick"/>
<goods-list :goods="showGoods"/>
</scroll>
<back-top @click.native="backClick" v-show="isShowBackTop"/>
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
import BackTop from 'components/content/backTop/BackTop.vue'
import {getHomeMultidata ,getHomeGoods} from 'network/home'
import Scroll from 'components/common/Bscroll/Scroll.vue'




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
      },
      currentType:'pop',
      isShowBackTop:false
    }
  }, 
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
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
    // 事件监听相关
    spanClick(index){
switch(index){
  case 0:
    this.currentType='pop'
    break
    case 1:
      this.currentType='new'
      break
      case 2:
        this.currentType='sell'
        break
}
},
   backClick(){
    // 监听组件加native
    // console.log(this.$refs.scroll.scroll.msg);
    // 方案一
    // this.$refs.scroll.scroll.scrollTo(0,0,600)
    // 方案二 在Scroll 封装好
    this.$refs.scroll.scrollTo(0,0)
   },
   contentScroll(position){
      //  console.log(position);
      this.isShowBackTop=-position.y > 500
   },
    // 网络请求相关
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
   },

  } ,
  computed:{
     showGoods(){
      return this.goods[this.currentType].list
     }
  }
}
</script>
<style scoped>
#home{
  /* 解决脱离标准流 */
    /* padding-top: 44px; */
    /* 设置home高度 vh 视口 */
    height: 100vh;
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
  z-index: 999;
} 
/* 方案一 */
/* .content{
  height: calc(100% - 94px);
  overflow: hidden;
  margin-top: 44px;
} */

/* 方案二 */
.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0%;
  right: 0;
  overflow: hidden;
}
</style>