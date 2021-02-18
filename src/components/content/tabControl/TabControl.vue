<template>
 <div class="Tab-control">
   <div v-for="(item,index) in titles" class="Tab-control-item" 
   :class="{active:index === currentIndex}" @click="spanClick(index)">
     <span>{{item}}</span>
   </div>
 </div>
</template>
<script>
export default {
  name:'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    spanClick(index){
      this.currentIndex = index
    }
  }
}
</script>
<style scoped>
.Tab-control{
  display: flex;
  text-align: center;
  font-size: 16px;
  background-color: #fff;
}
.Tab-control-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
  
}
.Tab-control-item span{
  padding-bottom: 5px;
}
.active{
  color: var(--color-hight-text);
  
}
.active span{
border-bottom: 3px solid var(--color-tint);
}
</style>