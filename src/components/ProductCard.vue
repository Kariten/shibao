<template>
    <div class="product">
      <img class="descimg" :src="image"/>
      <div style="width: 100%;">
        <p class="name">{{name}}</p>
        <div class="price">
            <div class="try">
                <span>￥{{price}}</span>
                <span class="button">试吃</span>
            </div>
            <div class="subscribe">
                <span>￥<span class="del">{{price}}</span>&nbsp;{{subscribe}}</span>
                <span class="button">订阅</span>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import enter from '@/assets/enter.png'
export default {
  name: 'entry',
  props: ['info'],
  data () {
    return {
      enter,
      ...this.info
    }
  }
}
</script>

<style scoped>
div.product {
  height: 7rem;
  width: 100%;
  border-bottom: #dadada solid 1px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}
p {
  margin: 0 0.5rem;
}
.descimg {
    min-width: 5rem;
    max-width: 5rem;
    min-height: 5rem;
    max-height: 5rem;
    margin: 1rem 0 1rem 1rem;
}
.name {
    position: relative;
    top: -2rem;
    width: 60%;
    text-align: start;
    font-size: 0.9rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.price {
    position: absolute;
    top: 70%;
    right: 0.25rem;
    transform: translateY(-50%);
    text-align: end;
    /* vertical-align: middle; */
    display: flex;
    flex-direction: column;
    color: red;
}
.del {
    text-decoration: line-through;
}
.try,.subscribe {
    display: inline-flex;
    flex-direction: row;
    display: inline-block;
    margin: 0 0 0.25rem 0;
}
.button {
    background-color: #008fa2;
    color: white;
    display: inline-block;
    text-align: center;
    font-size: 0.75rem;
    height: 1.5rem;
    line-height: 1.5rem;
    width: 2.5rem;
    border: #7f7f7f solid 1px;
}
/* .button > p {
    margin: 0.25rem 0;
} */
</style>
