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
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3rem;
        background-color: #008fa2;
        z-index: 999;
    }
    img{
        height: 2rem;
        width: 2rem;
        position: absolute;
        top: 50%;
        left: calc(50% - 4.5rem);
        transform: translateY(-50%);
    }
    p{
        display: inline-block;
        line-height: 3rem;
        margin: 0;
        color: white;
    }
</style>
