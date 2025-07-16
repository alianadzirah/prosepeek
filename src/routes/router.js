import Vue from 'vue'
import Router from 'vue-router'

import SignIn from '@/pages/signIn.vue'
import SignUp from '@/pages/signUp.vue'

import MenuPage from '../pages/menuPage.vue'
import SearchBooks from '../pages/searchBooks.vue'
import BookDetails from '@/pages/book/bookDetails.vue'
import ReadList from '@/pages/profile/readList.vue'

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
    { path: '/readlist', name: 'ReadList', component: ReadList }
  ],
})
