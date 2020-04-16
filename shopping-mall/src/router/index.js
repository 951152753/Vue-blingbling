import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Find from '../views/Find.vue'
import Order from '../views/Order.vue'
// import Mine from '../views/Mine.vue'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/find',
            name: 'Find',
            component: Find
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        },
        {
            path: '/mine',
            name: 'Mine',
            component: () =>
                import ('../views/Mine.vue')
        },
        {
            path: '/detail',
            name: 'Detail',
            component: () =>
                import ('../views/Detail.vue')
        }
    ]
})