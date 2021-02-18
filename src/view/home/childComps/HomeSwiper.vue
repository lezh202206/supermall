<template>
<div class="HomeSwper">
  轮播图
  <!-- <div v-for="item in banners">
    <a :href="item.link" >
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
 flex-shrink: 0;
line-height: 200px;

text-align: center;
}
.HomeSwper img{
  width: 100%;
}
</style>