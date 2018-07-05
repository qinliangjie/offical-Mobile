<template>
  <div id="products" class="index_box">
    <div class="content">
        <div class="item" v-for="(item,index) in gameDate">
          <img class="itemImg" :src="item.logo" alt="" />
          <div class="itemDom ">
            <p class="itemTitle">{{item.title}}</p>
            <p class="itemContent">{{item.details}}</p>
            <a class="itemA" :href="item.link">{{$t('m.products.oc')}}</a>
          </div>
          <div class="clear"></div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      navTitle:'产品业务',
      gotoLineL:'进入官网',
      games:'Games',
      lbt:[{images:''}],
      gameDate:[
      ]
    }
  },
  mounted:function(){ 
    this.markPost(this.$i18n.locale)
  },
  updated:function(){

  },
  methods:{ 
    markPost(e){
      var datas = {
          lang:e
      }
      this.getHttp(this,datas,'/front/product',function(obj,data){
         obj.gameDate = data;
         //丢上服务器之后要删掉，仅测试开发
         // for(var a in obj.gameDate){
         //     obj.gameDate[a].logo = obj.inser_src(obj.gameDate[a].logo);
         // }
      });
    }
  },
  computed: {
    getUserLangs() {
      //vue生命周期计算属性时返回对应的字体以便监听
      return this.$i18n.locale;
    }
  },
  watch:{
      getUserLangs(val) {
         this.markPost(val)
      }
  }
}
</script>
<style scoped>
#products .content{
  margin: 0rem 0.4rem 0 0.4rem;
    padding-top: 200px;
}
#products .content .item .itemImg{
  width: 690px;
  height: 400px
}
#products .content .item .itemTitle{
  color: #333;
  font-size: 32px;
  font-weight: bold;
  margin:30px 0;
}
#products .content .item .itemContent{
  color: #333;
  font-size: 28px;
  text-indent: 2em;
  word-break: break-all;
}
.itemA{
  display: block;
  float: right;
  width: 160px;
  height: 64px;
  line-height: 64px;
  color: white;
  background-color: #f08200;
  text-align: center;
  text-decoration: none;
  font-size: 30px;
  margin:20px 0 48px 0;
}
</style>
