import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/assets/element-ui'
import 'element-ui/lib/theme-chalk/index.css';


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
