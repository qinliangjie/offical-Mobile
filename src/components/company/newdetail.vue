<template>
  <div id="newdetail" class="index_box">
    <div class="content">
        <div class="airtcle">
        <p class="air_title">
          {{airtcleData.message_title}}
        </p>
        <p class="air_time">
         {{airtcleData.uptime}}
        </p>
        <div class="share" v-if="share">
          <span class='st_sharethis_large' displayText='ShareThis'></span>
          <span class='st_facebook_large' displayText='Facebook'></span>
          <span class='st_twitter_large' displayText='Tweet'></span>
          <span class='st_linkedin_large' displayText='LinkedIn'></span>
          <span class='st_email_large' displayText='Email'></span> 
        </div>
        <div class="air_detail" v-html="airtcleData.message_details">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      share:true,
      navTitle:'新闻详情',
      games:'News details',
      airtcleData:{
        id:'',
        message_details:'',
        message_title:'',
        uptime:''
      }
    }
  },
  mounted:function(){ 
    stLight.options({publisher: "5899e9df-0026-43e6-8a6c-cb461a799f5e", doNotHash: false, doNotCopy: false, hashAddressBar: false});
    stButtons.locateElements();
    this.markPost(this.$i18n.locale,this.$route.query.id);
  },
  updated:function(){

  },
  created: function(){
  },
  computed: {
    getUserLangs() {
      return this.$i18n.locale;
    }
  },
  watch:{
      getUserLangs(val) {
        this.markPost(val,this.$route.query.id)
      }
  },
  methods:{ 
    gotoConpany(){
      this.$router.push({path:'/company/newlist'})
    },
    gotoIndex(){
      this.$router.push({path:'/'})
    },
    markPost(e,c){
      var datas = {
          lang:e,
          id:c
      }
      var datasTwo = {
          lang:e,
          img:2
      }
      this.getHttp(this,datas,'/front/newsdetails',function(obj,data){
          obj.airtcleData = data
      });
    }
  }
}
</script>
<style scoped>
#newdetail .content{
  margin: 0rem 0.4rem 0 0.4rem;
    padding-top: 200px;
  min-height: 935px
}
.air_title{
  font-size: 32px;
  max-width: 85%;
  margin:0px auto 20px auto;
  text-align: center;
  color: #333
}
.air_time{
  max-width: 85%;
  margin:0 auto 20px auto;
  text-align: center;
  font-size: 24px;
  color: #999
}
.share{
  max-width: 85%;
  margin:0 auto 30px auto;
  text-align: center;
  font-size: 32px;
}
.air_detail{
  font-size: 28px;
  line-height: 48px;
  color: #333;
  word-break: break-all;
}
</style>
