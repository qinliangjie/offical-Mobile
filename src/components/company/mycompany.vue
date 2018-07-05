<template>
  <div id="company" class="index_box">
    <div class="content">
        <!-- 头部公共样式 -->
        <div class="all_top">
            <i></i>
            {{$t('m.company.about')}}
        </div>
        <div class="all_row">
          {{profileData.content}}
        </div>
        <!-- 头部公共样式 -->
        <div class="all_top">
            <i></i>
            {{$t('m.company.pr')}}
            <span v-on:click="gotoList()">{{$t('m.company.va')}}</span>
        </div>
        <div class="company_new">
          <ul class="newsul" >
            <li  v-for="(item,index) in newData" :key="item.id" v-on:click="gotonew(item.id)">
              <span class="fl ellipsis-one">{{item.message_title}}</span><span class="fr">{{item.uptime}}</span>
              <div class="clear"></div>
            </li>
          </ul>
        </div>
        
        <!-- 头部公共样式 -->
        <div class="all_top">
            <i></i>
            {{$t('m.company.rd')}}
        </div>
        <div class="development_">
            <div class="deve_item" v-for="item in deveData">
              <div class="deve_year"><span>{{item.time}}</span></div>
              <div class="deve_incident">{{item.details}}</div>
            </div>
        </div>
        <div class="clear"></div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      navlist:[{
        name:'',
        id:0
      },{
        name:'',
        id:1
      },{
        name:'',
        id:2
      }],
      lbt:[{images:''}],
      newimg:[],
      about:'关于我们',
      aboutEn:'About us',
      dynamic:'公司动态',
      gotoListdata:'查看全部',
      profile:'公司简介',
      development:'发展历程',
      profileData:{
        content:''
      },
      newData:[],
      deveData:[]
    }
  },
  mounted:function(){ 
    this.navlist[0].name = this.$t('m.company.about');
    this.navlist[1].name = this.$t('m.company.pr');
    this.navlist[2].name = this.$t('m.company.rd');
    this.markPost(this.$i18n.locale);
  },
  updated:function(){

  },
  methods:{ 
    gotonew(e) {
      this.$router.push({path:'/company/newdetail',query:{id:e}});
    },
    gotoList() {
      this.$router.push({path:'/company/newlist'});
    },
    markPost(e){
      var datas = {
          lang:e
      }
      this.getHttp(this,datas,'/front/intro',function(obj,data){
         obj.profileData.content = data.details
      });
      this.getHttp(this,datas,'/front/news',function(obj,data){
         obj.newData = data
      });
      this.getHttp(this,datas,'/front/develop',function(obj,data){
         obj.deveData = data
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
        this.navlist[0].name = this.$t('m.company.about');
        this.navlist[1].name = this.$t('m.company.pr');
        this.navlist[2].name = this.$t('m.company.rd');
        this.markPost(val);
      }
  }
}
</script>
<style scoped>
#company .content{
  margin: 0rem 0.4rem 0 0.4rem;
    padding-top: 200px;
}
#company .all_top{
  color: #333;
  font-size: 32px;
  width: 690px
}
#company .all_top i{
  display: inline-block;
  width: 4px;
  height: 24px;
  margin-right: 12px;
  background-color: #f08200
}
#company .all_row{
  padding-top: 40px;
  padding-bottom: 76px;
  font-size: 28px;
  color: #333;
  word-break: break-all;
  width:680px;
  text-indent: 2em;
  line-height: 48px
}
#company .all_top span{
  display: block;
  float: right;
  cursor: pointer;
  color: #f08200;
  line-height: 40px;
  font-size:24px
}
.company_new{
  margin: 30px auto 30px auto;
  margin-bottom: 0px;
  height: 320px
}
.newsul{
  height: 290px;
  overflow: hidden;
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
.development_{
  margin-left: 46px;
  padding-left: 83px;
  padding-bottom:33px;
  margin-top: 50px;
  border-left: 4px solid #f08200
}
.development_ .deve_item{
  margin-bottom: 80px;
  position: relative;
}
.development_ .deve_year{
  position: absolute;
  width: 96px;
  height: 96px;
  top: -10px;
  left: -126px;
  
  display: block;
  background: url('../../../static/img/year.png') no-repeat;
      background-size: 100% 100%;
}
.development_ .deve_year span{
  font-size: 30px;
  color: #f08200;
  line-height: 86px;
  margin-left: 12px
}
.topImg img{
  width: 100%;
  height:100%;
}
.deve_incident{
  line-height: 48px;
  font-size: 28px
}
</style>