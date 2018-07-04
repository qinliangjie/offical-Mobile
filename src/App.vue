<template>
  <div id="app">
    <b-header></b-header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import BHeader from '@/components/head'
import Footer from '@/components/footer'
export default {
  name: 'App',
  components: {BHeader,Footer}
}
</script>

<style scoped lang="less">
body{
  margin:0;
}
a:active, a:hover, a:link, a:visited {
    outline: 0;
}

</style>