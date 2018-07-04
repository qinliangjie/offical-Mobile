<template>
		<div class="head_wrap">
            <div class="head">
                <div class="head_con">
                    <img class="logo" src="../../static/img/footer.png" />
                </div>
                <div class="head_ul">
                    <router-link to="/" exact>
                        <div class="head_item fl">首页<i class="c_line"></i></div>
                    </router-link>
                    <router-link to="/company" >
                        <div class="head_item fl">公司信息<i class="c_line"></i></div>
                    </router-link>
                    <router-link to="/corporate" >
                        <div class="head_item fl">企业文化<i class="c_line"></i></div>
                    </router-link>
                    <router-link to="/products">
                        <div class="head_item fl">产品业务<i class="c_line"></i></div>
                    </router-link>
                    <router-link to="/joinus">
                        <div class="head_item fl">加入我们<i class="c_line"></i></div>
                    </router-link>
                    <div class="clear"></div>
                </div>
            </div>
            
        </div>
        
</template>
<script>
export default {
  data () {
    return{
        
    }
  },
  mounted:function(){
     
  },
  methods:{
    
  }
}
</script>
<style scoped lang="less">
body{
  margin:0;
}
a:active, a:hover, a:link, a:visited {
    outline: 0;
}
.head_con{
    width: 100%;
}
.head_con img{
    width:105px;
    height: 70px;
    margin-left: 30px
}
.head_ul{
    width: 100%;
}
.head_item{
    width:20%;
    font-size: 30px;
    text-align: center;
    line-height: 92px;
    position: relative;
    color: #333
}
.active .head_item .c_line{
    display: block;
}
.head_item .c_line{
    display: none;
    position: absolute;
    bottom: 0;
    width:150px;
    left: 50%;
    margin-left: -75px;
    height: 5px;
    background-color: #f08200
}
</style>