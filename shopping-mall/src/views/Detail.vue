<template>
  <div class="detail">
    <div class="detail-section1">
        <img src="../assets/image/back.png" alt="" class="detail-back" @click="goBack">
        <img :src="goodsImgUrl" alt="" class="detail-img">
    </div>
    <div class="detail-section2">
        <span class="detail-text">我是 —> {{name}} </span>
        <span class="detail-text goods-price">原价：{{price}}</span>
        <span class="detail-text goods-discountPrice">折扣价：{{discountPrice}}</span>
    </div>
    <div class="like-buy">
      <span class="like like-buy-same">加入购物车</span>
      <span class="buy like-buy-same">直接购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'Detail',
  data () {
    return {
        name: null,
        goodsImgUrl: '',
        price: 0,
        discountPrice: 0
    }
  },
  methods:{
    goBack(){
        // window.history.go(-1);  // 传统方法
        this.$router.push('/')
    }
  },
  mounted:function(){
    this.name = this.$route.query.name
    this.goodsImgUrl = this.$route.query.goodsImgUrl
    this.price = this.$route.query.price
    this.discountPrice = this.$route.query.discountPrice
    console.log(this.discountPrice)
  }
}
</script>

<style scoped>
.detail-section1{
  position: relative;
}
.detail-back{
  position: absolute;
  top: 10px;
  left: 10px;
  width: 20px;
}
.detail-section2{
  font-weight: bold;
  font-size: 22px;
}
.detail-text{
  margin: 0 10px;
}
.goods-price{
  text-decoration: line-through;
  color: rgba(0, 0, 0, .4);
  font-size: 1rem;
}
.goods-discountPrice{
  color: red;
  font-weight: bold;
}
.like-buy{
  position: absolute;
  bottom: 55px;
  right: 0;
}
.like-buy-same{
  display: block;
  float: left;
  width: 100px;
  height: 50px;
  line-height: 50px;
  font-size: 1rem;
}
.like{
  background-color: rgb(247, 101, 34);
}
.buy{
  background-color: rgb(252, 2, 2);
}
</style>