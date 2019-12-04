<template>
  <div class="wra">
      <input type="text" placeholder="搜索" v-model="val" @input="iptFn()">
      <div class="main">
          <dl v-for="(v,i) in obj" :key="i">
            <dt>{{v.img}}</dt>
            <dd>
              <h4>{{v.name}}</h4>
              <p>{{v.title}}</p>
            </dd>
          </dl>
      </div>
  </div>
</template>

<script>
export default {
data () {
  return {
    val:'',
    obj:[
      {
        img:"图片加载中",
        title:"作业写完没 666",
        name:"我的同桌1"
      },
       {
        img:"图片加载中",
        title:"作业写完没 666",
        name:"我的同桌2"
      },
       {
        img:"图片加载中",
        title:"作业写完没 666",
        name:"我的同桌3"
      },
       {
        img:"图片加载中",
        title:"作业写完没 666",
        name:"我的同桌4"
      },
       {
        img:"图片加载中",
        title:"作业写完没 666",
        name:"我的同桌5"
      }, {
        img:"图片加载中",
        title:"作业写完没 666",
        name:"我的同桌6"
      }
    ]
  }
},
methods: {
  iptFn(){
  let arr=this.obj.filter((v)=>{
      return v.name.includes(this.val)
    })
    this.obj=arr;
  }
}
}
</script>

<style lang="scss">
.wra{
  width: 100%;
  input{
    width: 100%;height: 35px;background: #ccc;border: none;border-radius: 10px; 
  }
  .main{
    width: 100%;background:sandybrown;
    dl{
      width: 100%;height: 100px;margin-bottom:10px;background:#fff;
      dt{
        float: left;width: 30%;height: 100%;text-align: center;line-height: 100px;background: #ccc;
      }
    }
  }
}
</style>