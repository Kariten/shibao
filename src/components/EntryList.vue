<template>
    <div class="container">
      <div v-for="(entry,index) in entries" :key="`entry${index}`">
          <entry :img="entry.image" :name="entry.name"></entry>
      </div>
    </div>
</template>

<script>
import Entry from './Entry.vue'
export default {
  name: 'entrylist',
  components: {
    Entry
  },
  data () {
    return {}
  },
  created () {
    this.entries = [
      {
        name: '哈哈哈哈',
        image: require('@/assets/logo.png')
      },
      {
        name: '哈哈哈哈',
        image: require('@/assets/logo.png')
      },
      {
        name: '哈哈哈哈',
        image: require('@/assets/logo.png')
      },
      {
        name: '哈哈哈哈',
        image: require('@/assets/logo.png')
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
