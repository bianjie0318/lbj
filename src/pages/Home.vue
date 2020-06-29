<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item) of banners" :key="item.id">
        <img :src="item.picUrl" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
        banners:[]
    };
  },
  created() {
      axios.get("https://api.it120.cc/small4/banner/list").then((res)=>{
          console.log(res)
          this.banners=res.data.data
      })
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.my-swipe{
    height: 360px;
    overflow: hidden;
}
.my-swipe .van-swipe-item {
  
}
.my-swipe .van-swipe-item img{
    width: 100%;
}
</style>
