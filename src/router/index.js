// 引入
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/home/TabHome.vue';
import Sort from '../views/sort/TabSort.vue';
import Cart from '../views/cart/TabCart.vue';
import User from '../views/user/TabUser.vue';

// 安装插件
Vue.use(Router)

// 创建路由对象
const router = new Router({
  // 设置路由映射关系
  routes: [
    // 设置路由的默认路径
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/sort',
      component: Sort
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/user',
      component: User
    }
  ],
  //将默认的hash模式改成HTML5的history模式
  mode: 'history'
})

// 导出路由
export default router
