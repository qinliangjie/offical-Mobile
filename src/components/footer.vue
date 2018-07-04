<template>
    <div class="footer">
		<div class="footer_wrap">
            <div class="footer">
                <img src="../../static/img/logo.png" alt="" class="footerImg logoIc" />
                <img src="../../static/img/morefun.png" alt="" class="footerImg MorefunIc" />
                <p class="footer_p">{{footer.text}}</p>
                <p class="footer_p">{{footer.number}}</p>
            </div>
            <div class="change_lang">
                <span class="tc">繁体中文</span>
                <span>丨</span>
                <span class="en">English</span>
            </div>
        </div>
        <transition name='slide-fade'>
            <div class='page-component-up' v-show='isShow' @click='getTop'>
                <img src="../../static/img/totop.png"  /> 返回顶部
            </div>
        </transition>
    </div>   
</template>
<script>
export default {
  data () {
    return{
        footer:{
           text:'Copyright © 2011-2018 iClockwork.All rights Reserved.',
           number:'备案号06465132498743'
        },
        isShow: false,
        target: ''
    }
  },
  mounted:function(){
     this.target = window;
     window.addEventListener('scroll', this.showIcon,true)
  },
  beforeDestroy () {
   //  组件销毁的时候，需要删除scroll的监听事件。
    this.target.removeEventListener('scroll', this.showIcon,true)
  },
  methods:{
    
    showIcon () {
      
  //  根据scrollTop的值来判断是否显示返回顶部的icon
      var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if (scrollTop > 200) {
        this.isShow = true
        
      } else if (scrollTop < 200) {
        this.isShow = false
      }
    },
    getTop () {
        
// 点击icon之后自动返回顶部的函数
      let timer = setInterval(() => {
        let top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        let speed = Math.ceil(top / 5)
        document.body.scrollTop   = top - speed
        if (top === 0) {
          clearInterval(timer)
        }
      }, 20)
    }
  }
}
</script>
<style scoped>
    .footer_wrap{
        width: 100%;
        height: 280px;
        background-color: #333
    }
    .footer{
        text-align: center;
    }
    .footer .footerImg{
        padding:30px 12px 0 12px;
    }
    .footer .logoIc{
        width: 105px;
        height: 70px
    }
    .footer .MorefunIc{
        width: 122px;
        height: 28px;
        margin-bottom: 21px
    }
    .footer .footer_p{
        margin:0 auto;
        width:584px;
        word-break: break-all;
        font-size: 22px;
        color: white;
        text-align: center;
        margin-top: 16px;
    }
    .footer .footer_p:first-child{
        margin-top: 23px;
    }
    .change_lang{
        text-align: center;
        color: white;
        font-size: 28px;
        margin-top: 15px
    }
    /*返回顶部*/
    .slide-fade-enter-active {
     transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.3, 0.8, 1.0);
    opacity: 0;
  }
  .page-component-up {
    width: 100%;
    height: 80px;
    cursor: pointer;
    opacity: .4;
    transition: .3s;
    text-align: center;
    z-index: 999;
    opacity: 1;
    color: #333;
    font-size: 28px;
    line-height: 80px
  }
  .page-component-up img{
    width:20px;
    height: 12px;
    margin-bottom: 5px
  }
  .hover {
    opacity: .8;
  }
</style>