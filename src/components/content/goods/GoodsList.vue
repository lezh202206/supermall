<template>
  <div class="goodlist">
        <goods-list-item v-for="item in goods" :goodsItem="item"/>
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components: { GoodsListItem },
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
.goodlist{
display: flex;
flex-wrap: wrap;
justify-content: space-around;
}
</style>