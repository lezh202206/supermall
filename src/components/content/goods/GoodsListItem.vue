 <template>
  <div class="goodslistitem">
    <img :src="goodsItem.show.img">
    <div class="goods-info"> 
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'GoodsListItem',
 props:{
   goodsItem:{
     type:Object,
     default(){
       return {}
     }
   }
 }
}
</script>
<style scoped>
.goodslistitem{
padding-bottom: 40px;
position: relative;
width: 47%;
}
.goodslistitem img{
  width: 100%;
border-radius: 5px;
}
.goods-info{
  font-size:12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price{
  color: var(--color-hight-text);
  margin-right: 20px;
}
.goods-info .collect{
  position: relative;
}
</style>