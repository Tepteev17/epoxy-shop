import { createRouter, createWebHistory } from 'vue-router'
import vHome from '../views/v-home.vue'
import vCatalog from '../views/v-catalog.vue'
import vBlog from '../views/v-blog.vue'
const routes = [
        {
            path:'/home',
            name:'home',
            component:vHome
        },
        {
            path:'/shop',
            name:'shop',
            component:vCatalog
        },
        {
            path:'/blog',
            name:'blog',
            component:vBlog
        },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router