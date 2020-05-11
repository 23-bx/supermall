<template>
  <div id="box">
    <TabHome></TabHome>
    <TabSort></TabSort>
		<TabCart></TabCart>
    <TabUser></TabUser>
  </div>
</template>

<script>
  import TabHome from '../../../views/home/TabHome.vue';
  import TabSort from '../../../views/sort/TabSort.vue';
  import TabCart from '../../../views/cart/TabCart.vue';
  import TabUser from '../../../views/user/TabUser.vue';
  export default {
    name: 'Tab',
    components: {
      TabHome,
      TabSort,
      TabCart,
      TabUser
    },
    methods: {
      divmousedown() {

      }
    }
  }
</script>

<style>
  body {
    margin: 0; padding: 0;
  }
  #box {
    position: absolute;
    width: 100%; height: 69px;
    bottom: 0;
    background: #D3D3D3;
  }
  div {
    width: 25%; height: 50px;
    text-align: center;
    float: left;
   }
  div img {
    display: block;
    width: 40px;
    margin: auto;
  }
  p {
    margin: 2px; padding: 0;
  }
</style>
