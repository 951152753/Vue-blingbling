<template>
  <!-- 底部导航 -->
  <div class="nav-bottom">
    <!-- router-link 标签相当于 a 标签，会有默认颜色和下划线，要想去掉，则加一个 tag="li" 即可 -->
    <router-link tag="li" to="/" class="link-to">
      <i class="iconfont iconshouye-"></i>
      <label>首页</label>
    </router-link>
    <router-link tag="li" to="/find" class="link-to">
      <i class="iconfont icontongyongtubiao-kuozhan-"></i>
      <label>发现</label>
    </router-link>
    <router-link tag="li" to="/order" class="link-to">
      <i class="iconfont icongouwuche-"></i>
      <label>购物车</label>
    </router-link>
    <router-link tag="li" to="/mine" class="link-to">
      <i class="iconfont icongeren-"></i>
      <label>我的</label>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBottom',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.active{
  color: red;
  font-weight: bold;
}
</style>
