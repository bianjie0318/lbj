<template>
  <div class="home">
    <van-tabbar active-color="#f00"  route>
      <van-tabbar-item to="/home/shouy" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/home/fenl" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/home/gouw" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/home/ger" icon="manager-o">个人</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  created() {},
  components: {
    
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>
