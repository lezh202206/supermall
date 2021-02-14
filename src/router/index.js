import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)
const Home = () =>
    import ('../view/home/Home.vue')
const Cart = () =>
    import ('../view/cart/Cart.vue')
const Catetgory = () =>
    import ('../view/category/Category.vue')
const Profile = () =>
    import ('../view/profile/Profile.vue')
const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
    path: '/cart',
    component: Cart
}, {
    path: '/category',
    component: Catetgory
}, {
    path: '/profile',
    component: Profile
}]
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router