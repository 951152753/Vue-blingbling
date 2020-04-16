<template>
  <div id="app">
    <!-- 头部 -->
    <Head />
    <!-- 路由展示 -->
    <router-view />
    <!-- 底部导航 -->
    <NavBottom />
  </div>
</template>

<script>
import NavBottom from './components/NavBottom.vue'
import Head from './components/Head'

export default {
  name: 'App',
  components: {
    NavBottom,
    Head
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
@import './assets/css/index.css';
@import url('https://fonts.font.im/css?family=Averia+Serif+Libre|Gloria+Hallelujah|Gugi|Hanalei+Fill|Indie+Flower|Lobster|Merienda|Nanum+Gothic+Coding|Overpass+Mono|Roboto|Shojumaru');
/* font-family: 'Indie Flower', cursive;
    font-family: 'Hanalei Fill', cursive;
    font-family: 'Lobster', cursive;
    font-family: 'Gloria Hallelujah', cursive;
    font-family: 'Averia Serif Libre', cursive;
    font-family: 'Shojumaru', cursive;
    font-family: 'Gugi', cursive;
    font-family: 'Merienda', cursive;
    font-family: 'Nanum Gothic Coding', monospace;
    font-family: 'Overpass Mono', monospace;
    font-family: 'Roboto', sans-serif; */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Roboto', sans-serif;;
}
</style>
