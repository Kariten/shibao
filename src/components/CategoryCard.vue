<template>
    <div>
        <img :src="img"/>
        <p>{{name}}</p>
    </div>
</template>

<script>
export default {
  name: 'category-card',
  props: ['img', 'name']
}
</script>

<style>
    div{
        background-color: #fcfcfc;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        box-shadow: #7f7f7f 1px;
    }
    img{
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
    }
</style>
