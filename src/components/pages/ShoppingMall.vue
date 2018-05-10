<template>
  <div class="ShoppingMall">
    <img :src=locationIcon alt="">
  </div>
</template>

<script>

  export default {
    name: "ShoppingMall",
    data() {
      return {
        msg: "Welcome to Your Vue.js App",
        locationIcon: require('../../assets/img/shuimitao.jpg')
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .ShoppingMall {
    img{
      width: 300px;
      height: 300px;
    }
  }
</style>
