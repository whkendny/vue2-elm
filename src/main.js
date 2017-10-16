import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router.js'
import store from './store/index.js'
import {routerMode} from './config/env.js'
import './config/rem.js'
import FastClick from 'fastclick'

// 消除点击延时提高程序的运行效率
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
  /*
    scrollBehavior 方法所触发的行为只能在 HTML5 history 模式下可用。
    params,
      to, from:   路由对象
      savedPosition:当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用, 返回滚动位置的对象信息，长这样:
      { x: number, y: number }
  */
	scrollBehavior (to, from, savedPosition) {
    console.log('scrollBehavior:--', to, from, savedPosition)
	  if (savedPosition) {
        // console.log(savedPosition)
		    return savedPosition;
		} else {
      // 如果是缓存的页面
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition ||0}
		}
	}
})

new Vue({
	router,
	store,
}).$mount('#app')
