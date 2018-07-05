<template>
  <div class="index" >
    <div class="banner_wrap">
      
      <swiper :options="swiperOption">
        <swiper-slide v-for="value in lbt">
          <img :src="value.images" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="content_item">
      <p class="item_title">{{$t('m.home.about')}} <i class="count_down"></i></p>
      <div class="profile">
        {{msg}}
      </div>
      <img class="proImg" v-if="indimg.length>0" v-bind:src="indimg[0].images"/>
    </div>
    <div class="content_item mt0">
      <p class="item_title">{{$t('m.home.pr')}} <i class="count_down"></i></p>
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
import 'swiper/dist/css/swiper.css' 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination:{
          el:'.swiper-pagination'
        },
        slidesPerView:1,
        autoplay:{
          delay:1000,
          disableOnInteraction:false
        },
        spaceBetween:30,
        loop:true
      },
      msg: '',
      notic:[],
      lbt: [  
      ],
      indimg:[],
      newimg:[],
      galleryTop :'' 
    }
  },
  mounted:function(){
    //this.lunbo();
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
  background-color: #e6e6e6;
      display: table-cell;
      margin: 0rem 0.4rem 0 0.4rem;
    padding-top: 170px;
}
.banner_wrap,.swiper-container{
  width:750px;
  height: 760px
}
.banner_wrap,.swiper-container img{
  width: 100%;
  height: 100%
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
  margin-bottom: 20px
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
.company_new{
  margin: 30px;
  margin-bottom: 0px;
  height: 300px
}
.newsul{
  height: 260px;
  overflow: hidden;
  padding-bottom: 30px
}
.newsul li{
  font-size: 28px;
  color: #333;
  line-height: 48px
}
.newsul li span:first-child{
  max-width: 70%;
}
.newsul li .fr{
  font-size: 26px;
  color: #999
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
