<template>
<div class="HomeSwper">
  轮播图
  <!-- {{banners.list.link}} -->
  <!-- <div v-for="item in banners">
    <a :href="item.list.link" >
      <img :src="item.image">
    </a>
  </div> -->
</div>
</template>
<script>
export default {
  name:"HomeSwper",
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
.HomeSwper{
  width: 100%;
  height: 200px;
  background-color: palevioletred;
  text-align: center;
  line-height: 200px;

}
</style>