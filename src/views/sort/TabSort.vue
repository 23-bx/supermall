<template>
 <div id="sort">
   <NavBar class="nav-sort"><div slot="center">分类</div></NavBar>
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
  .nav-sort {
    background: pink;
  }
</style>
