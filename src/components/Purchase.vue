<template>
    <div class="container">
        <div class="product">
            <img class="descimg" :src="product.image"/>
            <div class="detail">
                <p>{{product.name}}</p>
                <p>￥{{price}}</p>
            </div>
        </div>
        <div class="purchase-info">
            <form class="inputs">
                <div class="input">
                    <span>您的姓名：</span>
                    <input type="text" name="name" placeholder="请输入您的姓名"/>
                </div>
                <div class="input">
                    <span>联系方式：</span>
                    <input type="text" name="phone" placeholder="请输入您的电话"/>
                </div>
                <div class="input">
                    <span>详细地址：</span>
                    <input type="text" name="address" placeholder="请输入收货地址"/>
                </div>
            </form>
            <div class="subscription-opt" v-if="subscribe">
                <span>每
                    <select ref="period" id="period-select">
                        <option>月</option>
                        <option>周</option>
                    </select>
                    第
                    <input ref="day" id="day-to-deliver" type="text"/>
                    天将为您配送
                </span>
                <br>
                <span>
                    共订阅<input ref="periodLength" id="month-of-subscription" type="text"/>个<span ref="period">月</span>
                </span>
            </div>
            <div class="footer">
                <h2>{{total}}</h2>
                <div class="button">
                    结算
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'purchase',
  data () {
    return {}
  },
  created () {
    this.product = {
      name: '马浩睿:我tm食豹豹豹豹',
      image: require('@/assets/logo.png'),
      price: 48,
      subscribePrice: 38
    }
    this.subscribe = true
  },
  computed: {
    price () {
      return this.subscribe ? this.product.price : this.product.subscribePrice
    },
    total () {
      return '￥' + (this.price * this.$refs.periodLength)
    }
  }
}
</script>

<style scoped>
.container {
    margin-top: 3rem;
    text-align: left
}
.product {
    width: 100%;
    height: 8rem;
    display: flex;
}
.descimg {
    width: 6rem;
    height: 6rem;
    margin: 1rem;
}
.detail {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.detail > p:nth-child(2) {
    color: red;
    font-size: 1.5rem;
}
.inputs {
    margin: 2rem 0 0 1rem;
}
.input {
    margin: 0.5rem;
}
.input > input {
    margin-left: 0.5rem;
    height: 1.5rem;
    font-size: 1rem;
    border: #aaaaaa solid 1px;
    border-radius: 2px;
}
.subscription-opt {
    margin: 2rem 0 0 1.5rem;
}
.subscription-opt > span {
    display: inline-block;
    line-height: 1.5rem;
    margin-top: 0.5rem;
}
#day-to-deliver,#month-of-subscription {
    width: 2.5rem;
    height: 1.5rem;
    font-size: 1rem;
    border: #aaaaaa solid 1px;
    border-radius: 2px;
}
.footer{
    position: fixed;
    width: 100%;
    height: 4rem;
    bottom: 0;
    display: flex;
    align-content: center;
    border-top: #dadada solid 1px;
}
.button {
    position: absolute;
    right: 0;
    line-height: 4rem;
    width: 6rem;
    text-align: center;
    font-size: 2.5rem;
    background-color: #008fa2;
    color: white;
}
h2 {
    color: red;
    margin-left: 1rem;
    align-self: center;
}
</style>
