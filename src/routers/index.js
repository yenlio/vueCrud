import Home from '../pages/Home.vue'
import ItemPage from '../pages/ItemPage'

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const router = new VueRouter({
    routes: [

        {
            path: '/', component:Home,

        },
        {
            path: '/item_page',component:ItemPage ,

        }
    ]
})

export default router;