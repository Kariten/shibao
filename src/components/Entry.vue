<template>
    <div>
      <img class="product" :src="img"/>
      <p>{{name}}</p>
      <img class="enter" :src="enter"/>
    </div>
</template>

<script>
import enter from '@/assets/enter.png'
export default {
  name: 'entry',
  props: ['img', 'name'],
  data () {
    return {
      enter
    }
  }
}
</script>

<style scoped>
div {
  height: 3rem;
  width: 100%;
  border-bottom: #dadada solid 1px;
  position: relative;
  display: flex;
  align-items: center;
}
p {
  margin: 0 0.5rem;
}
.product {
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 0.5rem;
}
.enter {
  height: 1.5rem;
  width: 1.5rem;
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
}
</style>
