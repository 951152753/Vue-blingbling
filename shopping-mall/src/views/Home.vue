<template>
  <div class="home">
    <!-- 导航 -->
    <div class="index-category">
      <div class="category" v-for="(list, i) in categoryLists" :key="i">
        <i
          class="iconfont"
          :class="list.icon"
          :style="{ background: list.color }"
        ></i>
        <label>{{ list.title }}</label>
      </div>
    </div>
    <!-- 轮播 -->
    <Banner :imgArr="imgList" />
    <!-- 列表展示 -->
    <div class="index-main">
      <div class="goods-lists" v-for="item in goodsList" :key="item.id">
        <img :src="item.goodsImgUrl" class="goods-img" :title="item.name" :price="item.price" :discountPrice="item.discountPrice" @click="seeDetail">
        <div class="goods-price">
          <span class="discount" ref="dprice">折扣价：{{item.discountPrice}}</span>
          <span class="price-text">原价：{{item.price}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";

export default {
  name: "Home",
  components: {
    Banner
  },
  data() {
    return {
      categoryLists: [
        { title: "美食/外卖", icon: "iconmeishi", color: "rgb(243, 134, 61)" },
        {
          title: "电影/娱乐",
          icon: "icondianying",
          color: "rgb(185, 124, 255)"
        },
        {
          title: "住宿/酒店",
          icon: "iconjiudian",
          color: "rgb(140, 140, 140)"
        },
        {
          title: "出行/租车",
          icon: "iconchuzuche",
          color: "rgb(182, 212, 154)"
        },
        {
          title: "旅游/景点",
          icon: "iconlvyouchengshijianzhucity-haidaoisland",
          color: "rgb(154, 208, 212)"
        },
        { title: "运动/健身", icon: "iconpaobu", color: "rgb(245, 168, 210)" },
        { title: "医疗/健康", icon: "iconchongwuyiliao", color: "#ecbe35" },
        {
          title: "教育/培训",
          icon: "iconzaixianjiaoyu",
          color: "rgb(114, 183, 240)"
        }
      ],
      imgList: [
        require("../assets/image/1.png"),
        require("../assets/image/2.png"),
        require("../assets/image/3.png"),
        require("../assets/image/4.png")
      ],
      goodsList: [
        {id: 0, name: '桃子', goodsImgUrl: require('../assets/image/avatar1.png'), price: 20, discountPrice: 18},
        {id: 1, name: '榴莲', goodsImgUrl: require('../assets/image/avatar2.png'), price: 20, discountPrice: 18},
        {id: 2, name: '柠檬', goodsImgUrl: require('../assets/image/avatar3.png'), price: 20, discountPrice: 18},
        {id: 3, name: '芒果', goodsImgUrl: require('../assets/image/avatar4.png'), price: 20, discountPrice: 18},
        {id: 4, name: '苹果', goodsImgUrl: require('../assets/image/avatar5.png'), price: 20, discountPrice: 18},
        {id: 5, name: '蓝莓', goodsImgUrl: require('../assets/image/avatar6.png'), price: 20, discountPrice: 18},
        {id: 6, name: '草莓', goodsImgUrl: require('../assets/image/avatar7.png'), price: 20, discountPrice: 18},
        {id: 7, name: '橙子', goodsImgUrl: require('../assets/image/avatar8.png'), price: 20, discountPrice: 18},
        {id: 8, name: '葡萄', goodsImgUrl: require('../assets/image/avatar9.png'), price: 20, discountPrice: 18},
        {id: 9, name: '棒棒糖', goodsImgUrl: require('../assets/image/avatar10.png'), price: 20, discountPrice: 18},
        {id: 10, name: '狗子', goodsImgUrl: require('../assets/image/avatar11.png'), price: 20, discountPrice: 18},
        {id: 11, name: '饼', goodsImgUrl: require('../assets/image/avatar12.png'), price: 20, discountPrice: 18},
        {id: 12, name: '圣诞节', goodsImgUrl: require('../assets/image/avatar13.png'), price: 20, discountPrice: 18},
        {id: 13, name: '睡衣', goodsImgUrl: require('../assets/image/avatar14.png'), price: 20, discountPrice: 18}
      ]
    };
  },
  methods: {
    getData() {
      // this.axios.get('home/page/1/10').then(res=>{
      //   console.log(res)
      // })
    },
    seeDetail(e){
      console.log('target', e.target.attributes.src.value)
      let target = e.target.attributes;
      this.$router.push({
        path: '/detail',
        query: {
          name: target.title.value,
          goodsImgUrl: target.src.value,
          price: target.price.value,
          discountPrice: target.discountPrice.value
        }
      })
    }
  },
  mounted: function() {
    // 挂载完成
    this.getData()
  }
};
</script>

<style scoped>
.home{
  padding-bottom: 56px;
}
</style>
