<template>
  <div id="corporate" class="index_box">
    <div class="content">
        <!-- 头部公共样式 -->
        <div class="all_top">
            <i></i>
            {{$t('m.culture.cv')}}
        </div>
        <div class="all_row">
          <img class="core_img" :src="visionData.logo" alt="" />
          <p class="detail_title">{{$t('m.culture.vs')}}</p>
          <p class="detail_">{{visionData.details}}</p>
          <img class="core_img" :src="missionData.logo" alt="" />
            <p class="detail_title">{{$t('m.culture.ms')}}</p>
            <p class="detail_">{{missionData.details}}</p>
        </div>
        <!-- 头部公共样式 -->
        <div class="all_top">
            <i></i>
            {{$t('m.culture.td')}}
        </div>
        <div class="all_row">
            <p class="row_p">{{talentData.details}}</p>
        </div>
        <!-- 头部公共样式 -->
        <div class="all_top">
            <i></i>
            {{$t('m.culture.we')}}
        </div>
        <div class="all_row">
          <img class="core_img" :src="officeData.logo" alt="" />
          <p class="detail_">{{officeData.details}}</p>
        </div>
        <!-- 头部公共样式 -->
        <div class="all_top">
            <i></i>
            {{$t('m.culture.ea')}}
        </div>
        <div class="all_row">
          <div v-for="item in staffData">
            <img class="core_img" :src="item.logo" alt="" />
            <p class="detail_title">{{item.title}}</p>
            <p class="detail_">{{item.details}}</p>
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
      },{
        name:'',
        id:3
      }],
      lbt:[{images:''}],
      vision:'愿景',
      mission:'使命',
      titleEn:'Culture',
      langs:'zh',
      visionData:'',
      missionData:'',
      talentData:'',
      officeData:'',
      staffData:[]
    }
  },
  mounted:function(){ 
    this.showList();
    this.markPost(this.$i18n.locale)
  },
  updated:function(){

  },
  methods:{ 
    showList:function(){
      this.navlist[0].name = this.$t('m.culture.cv');
      this.navlist[1].name = this.$t('m.culture.td');
      this.navlist[2].name = this.$t('m.culture.we');
      this.navlist[3].name = this.$t('m.culture.ea');
    },
    markPost(e){
      var datas = {
          lang:e
      }
      this.getHttp(this,datas,'/front/vision',function(obj,data){
         obj.visionData = data;
         //丢上服务器之后要删掉，仅测试开发
         //obj.visionData.logo = obj.inser_src(obj.visionData.logo);
      });
      this.getHttp(this,datas,'/front/mission',function(obj,data){
         obj.missionData = data;
         //丢上服务器之后要删掉，仅测试开发
         //obj.missionData.logo = obj.inser_src(obj.missionData.logo);
      });
      this.getHttp(this,datas,'/front/talents',function(obj,data){
         obj.talentData = data;
      });
      this.getHttp(this,datas,'/front/office',function(obj,data){
         obj.officeData = data;
         //丢上服务器之后要删掉，仅测试开发
         //obj.officeData.logo = obj.inser_src(obj.officeData.logo);
      });
      this.getHttp(this,datas,'/front/staff',function(obj,data){
         obj.staffData = data;
         //丢上服务器之后要删掉，仅测试开发
         // for(var a in obj.staffData){
         //     obj.staffData[a].logo = obj.inser_src(obj.staffData[a].logo);
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
         this.showList();
         this.markPost(val)
      }
  }
}
</script>
<style scoped>
#corporate .content{
  margin: 0rem 0.4rem 0 0.4rem;
    padding-top: 200px;
}
#corporate .all_top{
  color: #333;
  font-size: 32px;
  width: 690px
}
#corporate .all_top i{
  display: inline-block;
  width: 4px;
  height: 24px;
  margin-right: 12px;
  background-color: #f08200
}
#corporate .all_row{
  padding-top: 40px;
  padding-bottom: 76px;
  font-size: 28px;
  color: #333;
  word-break: break-all;
  width:680px;
  line-height: 48px
}
#corporate .all_row .core_img{
  width: 690px;
  height: 290px;
}
#corporate .all_row .detail_title{
  font-size: 30px;
  color: #333;
  margin-top: 10px;
}
.detail_{
  font-size: 28px;
  text-indent: 2em;
  margin-top: 22px;
  margin-bottom: 47px;
}
.row_p{
  text-indent: 2em
}
</style>