import Vue from 'vue'
import Router from 'vue-router'

import SignIn from '@/pages/SignIn.vue'
import SignUp from '@/pages/SignUp.vue'

import MenuPage from '../pages/MenuPage.vue'
import SearchBooks from '../pages/SearchBooks.vue'
import BookDetails from '@/pages/book/BookDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'MenuPage', component: MenuPage },
    { path: '/signin', name: 'SignIn', component: SignIn },
    { path: '/signup', name: 'SignUp', component: SignUp },
    { path: '/prosepeek', name: 'MenuPage', component: MenuPage },
    { path: '/books', name: 'SearchBooks', component: SearchBooks },
    { path: '/books/:name/:id', name: 'BookDetails', component: BookDetails, props: true },
  ],
})
