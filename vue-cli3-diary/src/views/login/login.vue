<template>
  <div class="login">
    <h1 class="title">登录</h1>
    <div class="input-box">
      用户名：
      <i-input type="text" class="input" v-model="name" placeholder="请输入用户名"></i-input>
    </div>
    <div class="input-box">
      密码：
      <i-input type="password" class="input" v-model="pass" placeholder="请输入密码"></i-input>
    </div>
    <div class="input-box">
      <i-button type="primary" long @click="login">登录</i-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  component: {},
  data () {
    return {
      name: '',
      pass: ''
    }
  },
  methods: {
    login () {
      if (!this.name || !this.pass) {
        this.$Notice.warning({
          title: '警告',
          desc: '用户名或密码不能为空！'
        })
        return
      }
      this.axios.get('http://127.0.0.1:7002/login', {
        params: {
          username: this.name,
          password: this.pass
        }
      }).then((res) => {
        console.log('成功', res)
      }, (err) => {
        console.log('失败', err)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import "./login.less";
</style>
