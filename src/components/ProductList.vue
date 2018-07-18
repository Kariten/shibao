<template>
    <div class="container">
      <div v-for="(product,index) in products" :key="`product${index}`">
          <product-card :info="product"></product-card>
      </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  data () {
    return {}
  },
  created () {
    this.products = [
      {
        name: '哈哈哈哈',
        image: require('@/assets/logo.png'),
        price: 88,
        subscribe: 68
      },
      {
        name: '哈哈哈哈adgsggggggggggggggg哈哈哈哈哈哈',
        image: require('@/assets/logo.png'),
        price: 88,
        subscribe: 68
      },
      {
        name: '哈哈哈哈',
        image: require('@/assets/logo.png'),
        price: 88,
        subscribe: 68
      },
      {
        name: '哈哈哈哈',
        image: require('@/assets/logo.png'),
        price: 88,
        subscribe: 68
      }
    ]
  }
}
</script>

<style scoped>
.container{
  margin-top: 3rem;
}
</style>
