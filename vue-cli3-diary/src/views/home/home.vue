<template>
  <div class="home">
    <Card class="card" v-for="(item, i) in msg" :key="i">
      <p slot="title">
        {{item.title}}
        <span class="date">{{item.date}}</span>
      </p>
      <p class="content">{{item.content}}</p>
    </Card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      msg: [
        {
          date: '2020-05-20 12:00',
          title: 'qqq',
          content: 'xncbwdhksjnscjbsf'
        }, {
          date: '2020-05-20 12:00',
          title: 'qqq',
          content: 'xncbwdhksjnscjbsf'
        }, {
          date: '2020-05-20 12:00',
          title: 'qqq',
          content: 'xncbwdhksjnscjbsf'
        }
      ],
      haveLogin: true
    }
  },
  methods: {
    // 判断用户是否登录
    isLogin () {
      if (!this.haveLogin) {
        this.$router.push({ name: 'Login' })
      }
    }
  },
  mounted () {
    // 用户是否登录
    this.isLogin()
    // 使用 axios
    this.axios.get('http://127.0.0.1:7002/login?username=ykx&password=123').then((res) => {
      console.log(res)
    }, (err) => {
      console.log(err)
    })
  }
}
</script>

<style lang="less" scoped>
  @import "./home.less";
</style>
