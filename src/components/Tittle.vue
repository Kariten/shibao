<template>
    <div>
        <img :src="logo"/>
        <p>食豹</p>
    </div>
</template>

<script>
import logo from '@/assets/logo.png'
export default {
  name: 'header',
  data () {
    return {
      logo
    }
  }
}
</script>

<style scoped>
    div{
        display: flex;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2rem;
        background-color: #008fa2
    }
    img{
        height: 1.5rem;
        width: 1.5rem;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    p{
        display: inline-block;
        line-height: 2rem;
        margin: 0;
        color: white;
    }
</style>
