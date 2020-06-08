<template>
  <div class="add">
      <div class="form-item">
          <h1 class="form-title"><Icon type="ios-book-outline"></Icon> 添 加 日 记</h1>
      </div>
      <div class="form-item">
          标题：
          <i-input v-model="title" placeholder="请输入标题......"></i-input>
      </div>
      <div class="form-item">
          内容：
          <i-input type="textarea" v-model="content" placeholder="请输入内容......" :autosize="{minRows: 15, maxRows: 50}"></i-input>
      </div>
      <div class="form-item form-btns">
          <i-button type="primary" class="item-btn add-btn" long @click="addDiary">添 加</i-button>
          <i-button type="Default" class="item-btn cancel-btn" long @click="cancelAddDiary">取 消</i-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Add',
  components: {},
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    addDiary () {
      console.log('add')
    },
    cancelAddDiary () {
      console.log('cancelAdd')
    }
  }
}
</script>

<style lang="less" scoped>
  @import "./add.less";
</style>
