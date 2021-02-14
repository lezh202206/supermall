<template>
    <tabbar>
     <tabbar-item path="/home">
       <img slot="item-icon" src="~assets/img/tabbar/yifu.svg">
       <img slot="item-active" src="~assets/img/tabbar/hongbao.svg" >
       <div slot="item-text">首页</div>
     </tabbar-item>
      <tabbar-item  path="/category" activeColor="darkorange"> 
       <img slot="item-icon" src="~assets/img/tabbar/fenlei.svg">
       <img slot="item-active" src="~assets/img/tabbar/qiqiu.svg">
       <div slot="item-text">分类</div>
     </tabbar-item>
      <tabbar-item  path="/cart">
       <img slot="item-icon" src="~assets/img/tabbar/gwc.svg">
       <img slot="item-active" src="~assets/img/tabbar/liwu.svg">
       <div slot="item-text">购物车</div>
     </tabbar-item>
      <tabbar-item  path="/profile">
       <img slot="item-icon" src="~assets/img/tabbar/wode.svg">
       <img slot="item-active" src="~assets/img/tabbar/fuzi.svg">
       <div slot="item-text">我的</div>
     </tabbar-item>
   </tabbar>
</template>
<script>
  import Tabbar from 'components/common/tabbar/Tabbar.vue';
  import TabbarItem from 'components/common/tabbar/TabbarItem.vue';
export default {
name:"Maintabbar",
components:{
  Tabbar,
  TabbarItem
}
}
</script>