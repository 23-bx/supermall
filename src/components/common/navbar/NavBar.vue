<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
	export default {
		name: 'NavBar'
	}
</script>

<style>
  .nav-bar {
    display: flex;
    height: 44px;
    text-align: center;
    line-height: 44px;
    font-size: 20px;
    color: grey;
  }
  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>
