import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui' 
import router from './router.js'
import echarts from 'echarts'

import 'element-ui/lib/theme-chalk/index.css'  //引入elementui的样式

Vue.prototype.$echarts = echarts;
Vue.use(ElementUI)

Vue.config.productionTip = false

// 1.创建全局的bus
Vue.prototype.$bus=new Vue();


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
