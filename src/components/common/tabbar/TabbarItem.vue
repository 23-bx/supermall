<template>
  <div class="tab-bar-item" @click="divclick">
    <slot v-if="flag" name="img-src"></slot>
    <slot v-else name="imgsrc-click"></slot>
    <div v-bind:style="activestyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabbarItem',
    props: {
      activecolor: {
        type: String,
        default: "#DB331D"
      },
      link: String
    },
    computed: {
      flag() {
        // stringObject.indexOf(searchvalue,fromindex)
        // 该方法将从头到尾地检索字符串 stringObject，看它是否含有子串 searchvalue。
        // 开始检索的位置在字符串的 fromindex 处或字符串的开头（没有指定 fromindex 时）。
        // 如果找到一个 searchvalue，则返回 searchvalue 的第一次出现的位置。
        // 如果要检索的字符串值没有出现，则该方法返回 -1。
        return this.$route.path.indexOf(this.link) ==-1;
      },
      // 动态绑定文字颜色
      activestyle() {
        if(!this.flag) {
          return {
            color: this.activecolor
          };
        }
        else {
          return {};
        }
      }
    },
    methods: {
      divclick() {
        // console.log('我被点击了');
        this.$router.replace(this.link);
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img {
    display: block;
    width: 30px;
    margin: auto;
  }
</style>
