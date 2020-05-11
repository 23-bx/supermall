<template>
  <Tabbar>
    <TabbarItem link="/home">
      <img slot="img-src" src="~assets/imgs/tabbar/home.png" alt="">
      <img slot="imgsrc-click" src="~assets/imgs/tabbar/home1.png" alt="">
      <div slot="text">首页</div>
    </TabbarItem>
    <TabbarItem link="/sort">
      <img slot="img-src" src="~assets/imgs/tabbar/分类.png" alt="">
      <img slot="imgsrc-click" src="~assets/imgs/tabbar/分类1.png" alt="">
      <div slot="text">分类</div>
    </TabbarItem>
    <TabbarItem link="/cart">
      <img slot="img-src" src="~assets/imgs/tabbar/购物车.png" alt="">
      <img slot="imgsrc-click" src="~assets/imgs/tabbar/购物车1.png" alt="">
      <div slot="text">购物车</div>
    </TabbarItem>
    <TabbarItem link="/user">
      <img slot="img-src" src="~assets/imgs/tabbar/user.png" alt="">
      <img slot="imgsrc-click" src="~assets/imgs/tabbar/user1.png" alt="">
      <div slot="text">我的</div>
    </TabbarItem>
  </Tabbar>
</template>

<script>
  import Tabbar from '../common/tabbar/Tabbar.vue';
  import TabbarItem from '../common/tabbar/TabbarItem.vue';
  export default {
    name: 'maintabbar',
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style>
</style>
