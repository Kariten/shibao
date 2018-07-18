<template>
    <div class="container">
        <div class="category" v-for="(cate,index) in categories" :key="`cate${index}`">
            <category-card :name="cate.name" :img="cate.image"></category-card>
        </div>
    </div>
</template>

<script>
import categoryCard from './CategoryCard.vue'
export default {
  name: 'category',
  components: {
    categoryCard
  },
  data () {
    return {
      categories: [
        {
          name: '休闲零食',
          image: require('@/assets/logo.png')
        },
        {
          name: '休闲零食',
          image: require('@/assets/logo.png')
        },
        {
          name: '休闲零食',
          image: require('@/assets/logo.png')
        },
        {
          name: '休闲零食',
          image: require('@/assets/logo.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
div.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100%;
  margin-top: 3.5rem;
  padding: 0 1rem;
}
div.category{
  margin: 0.5rem;
  width: 43%;
}
</style>
