<template>
  <div id="cart">
    <NavBar class="nav-cart"><div slot="center">购物车</div></NavBar>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  export default {
    components: {
      NavBar
    }
  }
</script>

<style>
  .nav-cart {
    background: pink;
  }
</style>
