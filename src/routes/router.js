import Vue from 'vue'
import Router from 'vue-router'

import MenuPage from '../pages/MenuPage.vue'
import SearchBooks from '../pages/SearchBooks.vue'
import NewestBooks from '../pages/NewestBooks.vue'
import BookDetails from '@/pages/book/BookDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'MenuPage', component: MenuPage },
    { path: '/books', name: 'SearchBooks', component: SearchBooks },
    { path: '/books/:name/:id', name: 'BookDetails', component: BookDetails, props: true },
    { path: '/newest', name: 'NewestBooks', component: NewestBooks },
    // { path: '/shop', name: 'Shop', component: Shop },
  ],
})
