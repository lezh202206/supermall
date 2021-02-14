<template>  
<div class="tabbar">
   <slot></slot>
 </div>
</template>
<script>
export default {
  name:"Tabbar"
}
</script>
<style scoped>
.tabbar{
  display: flex;
  position: fixed;
  bottom: 0%;
  left: 0%;
  right: 0%;
  background-color: #f6f6f6f6;
  box-shadow: 1px -2px 3px rgba(100, 100, 100, .3);
}

</style>