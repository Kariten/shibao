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

<style scoped>
    div{
        height: 9rem;
        /* width: 40%; */
        background-color: #fcfcfc;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /* border: #6f6f6f solid 1px; */
        box-shadow: 0 0 0.25rem #7f7f7f;
    }
    img{
        height: 6rem;
        width: 6rem;
        border-radius: 50%;
    }
    p{
        margin: 0.5rem 0;
    }
</style>
