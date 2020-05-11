<template>
  <div id="user">
    <NavBar class="nav-user"><div slot="center">用户</div></NavBar>
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
  .nav-user {
    background-color: pink;
  }
</style>
