<template>
  <div class="home">
   <div class="wrapper">
      <router-view/>
   </div>
    <div class="foot">
      <router-link v-for="(v,i) in list" :key="i" :to="v.path" tag="span" >{{v.text}}</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      list:[
        {
          path:"/home/main",
          text:"主页"
        },
        {
          path:"/home/about",
          text:"新闻"
        },
         {
          path:"/home/my",
          text:"我的"
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;height: 100%;display: flex;flex-direction: column;
}
.wrapper{
  width: 100%;flex:1;overflow: auto;
}
.foot{
  width: 100%;height: 45px;line-height: 45px;background: salmon;display: flex;
  span{
    flex: 1;text-align: center;
  }
}
</style>