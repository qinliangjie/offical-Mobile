<template>
  <div class="index" >
    <div class="banner_wrap">
      <div  class="swiper-container gallery-top swiper-container-horizontal">  
        <div class="swiper-wrapper">  
           <div v-for="value in lbt" class="swiper-slide swiper-slide-next" style="width: 100%; margin-right: 10px;background-size:100% 100%" v-bind:style="{backgroundImage: 'url(' + value.images + ')'}"></div>  
        </div> 
        <div class="swiper-pagination"></div>  
      </div>   
    </div>
    <div class="content_item">
      <p class="item_title">{{$t('m.home.about')}} <i class="count_down"></i></p>
      <div class="profile">
        {{msg}}
      </div>
      <img class="proImg" v-if="indimg.length>0" v-bind:src="indimg[0].images"/>
    </div>
    <div class="content_item mt0">
      <p class="item_title">{{$t('m.home.about')}} <i class="count_down"></i></p>
      <img class="newImg" v-if="newimg.length>0" v-bind:src="newimg[0].images"/>
      <div class="company_new">
        <ul class="newsul" >
            <li  v-for="(item,index) in notic" :key="item.id" v-on:click="gotonew(item.id)">
              <span class="fl ellipsis-one">{{item.message_title}}</span><span class="fr">{{item.uptime}}</span>
              <div class="clear"></div>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data () {
    return {
      msg: '苏州爱洛克信息技术有限公司成立于2012年，注册资本1051万。公司总部位于苏州市工业园区，分别在台湾新北、曼谷舍友驻地分公司，创始团队均来自Activision Blizzard等知名游戏公司，平均从业10年以上，有丰富的AAA级游戏制作经验和发行经验。团队曾在中国及全球AppStore, GooglePlay Store成功发行过多款Top 10游戏。',
      notic:[],
      lbt: [  
      ],
      indimg:[],
      newimg:[],
      galleryTop :'' 
    }
  },
  mounted:function(){
    this.lunbo();
    this.markPost(this.$i18n.locale)
  },
  updated:function(){

  },
  computed: {
    getUserLangs() {
      return this.$i18n.locale;
    }
  },
  watch:{
      getUserLangs(val) {
        this.markPost(this.$i18n.locale)
      }
  },
  methods:{
    lunbo(){
       new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          })  
    },
    gotonew(e) {
      this.$router.push({path:'/company/newdetail',query:{id:e}});
    },
    markPost(e){
      var datas = {
          lang:e
      }
      var datasTwo = {
        lang:e,
        img:1
      }
      this.getHttp(this,datas,'/front/intro',function(obj,data){
         obj.msg = data.details
      });
      this.getHttp(this,datas,'/front/news',function(obj,data){
         obj.notic = data
      });
      this.getHttp(this,datasTwo,'/front/banner',function(obj,data){
        obj.lbt = data;
         //丢上服务器之后要删掉，仅测试开发
          for(var a =0;a<obj.lbt.length;a++){
              obj.lbt[a].images = obj.inser_src(obj.lbt[a].images);
          }
      });
      this.getHttp(this,'','/front/indimg',function(obj,data){
        obj.indimg=[];obj.newimg=[];
        for(var a =0;a<data.length;a++){
          data[a].images = obj.inser_src(data[a].images);
          if(data[a].mark=='7'){
            obj.indimg.push(data[a]);
          }else if(data[a].mark=='8'){
            obj.newimg.push(data[a]);
          }
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.index{
  background-color: #e6e6e6
}
.banner_wrap,.swiper-container{
  width:750px;
  height: 760px
}
.content_item{
  width: 690px;
  margin:-40px auto 23px auto;
  position: relative;
  z-index: 998;
  background: white;
  text-align: center;
}
.mt0{
  margin-top: 0;
  margin-bottom: 0px
}
.count_down{
    display: block;
    height: 4px;
    width: 30px;
    margin-left: -15px;
    background: #F08200;
    overflow: hidden;
    position: absolute;
    left: 50%;
    bottom: -7px;

}
.content_item .item_title{
  text-align: center;
  font-size: 32px;
  color: #F08200;
  padding-top: 35px;
  position: relative;
}
.profile{
  padding: 30px;
  font-size: 28px;
  color: #333;
  text-indent: 2em;
  line-height: 46px;
  text-align: left;
}
.newsul{
  
}
.proImg{
  width: 631px;
  height: 361px;
  margin-bottom: 30px
}
.newImg{
  width: 631px;
  height: 341px;
  margin-top: 30px
}
</style>
