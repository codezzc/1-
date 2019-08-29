import Vue from 'vue'
import Router from 'vue-router'
import JDJS from '../components/person/index1.vue'
import RSDYZ from '../components/person/index2.vue'
import WYWZN from '../components/person/index3.vue'
import DDDLB from '../components/person/index4.vue'
import XMRZM from '../components/person/index5.vue'
import DLNZW from '../components/person/index6.vue'
import JTZL from '../components/person/index7.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path:'/',
      redirect:'/jdjs'

    },
    { path:'/jdjs',
      component:JDJS

    },
    { path:'/rsdyz',
      component:RSDYZ
    },
    { path:'/wywzn',
      component:WYWZN
    },
    {
      path:'/dddlb',
      component:DDDLB
    },
    {
      path:'/xmrzm',
      component:XMRZM
    },
    {
      path:'/dlnzw',
      component:DLNZW
    },
    {
      path:'/jtzl',
      component:JTZL
    }
  ]
})
