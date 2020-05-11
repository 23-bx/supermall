<template>
  <div id="home">
    <!-- <p>首页</p> -->
    <NavBar class="nav-home"><div slot="center">首页</div></NavBar>
    <swiper>
    </swiper>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue';
  import {getHomedata} from '../../network/home.js';
  // import {Swiper, SwiperItem} from '../../components/common/swiper'
  import swiper from '../../components/common/swiper/Swiper.vue'

  export default {
    name: 'TabHome',
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    components: {
      NavBar,
      Swiper
      // SwiperItem
    },
    // 生命周期函数
    created() {
      // 1.请求多个数据
      getHomedata().then(res => {
        // console.log(res);
        // 将res保存在result中，防止数据被回收
        this.banners = res.data.banner;
        this.recommends = res.data.recommend;
      })
    }
  }
</script>

<style>
  .nav-home {
    background: pink;
  }
</style>
