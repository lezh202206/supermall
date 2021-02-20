<template>
  <div class="wrapper" ref="wrepper">
    <div class="centent">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props:{
    probeType:{
      type:Number,
      default:0
    }
  },
  name:'Scroll',
  data(){
return{
  scroll:null,
  msg:'msg'
}
  },
  mounted(){
    this.scroll= new BScroll(this.$refs.wrepper,{
      click:true,
      probeType:this.probeType
    })
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
  },
  methods:{
    // time=600 ES6语法 初始值
    scrollTo(x,y,time=600){
      this.scroll.scrollTo(x,y,time)
    }
  }
}
</script>
<style scoped>

</style>