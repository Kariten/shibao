import Vue from 'vue'
import Router from 'vue-router'
import EntryList from '@/components/EntryList.vue'
import Category from '@/components/Category.vue'
import ProductList from '@/components/ProductList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'category',
      component: Category
    },
    {
      path: '/entries',
      name: 'entrylist',
      component: EntryList
    },
    {
      path: '/products',
      name: 'productlist',
      component: ProductList
    }
  ]
})
