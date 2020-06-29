<template>
  <div class="wrap">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item) of banners" :key="item.id">
        <img :src="item.picUrl" alt />
      </van-swipe-item>
    </van-swipe>
    <ul class="nav">
      <li>
        <img src="/static/img/cd1.7808faf.png" alt />
        <p>签到</p>
      </li>
      <li>
        <img src="/static/img/tu2.png" alt />
        <p>礼券</p>
      </li>
      <li>
        <img src="/static/img/tu3.png" alt />
        <p>砍价</p>
      </li>
      <li>
        <img src="/static/img/tu4.png" alt />
        <p>专栏</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: []
    };
  },
  created() {},
  mounted() {
    this.$http.get("https://api.it120.cc/small4/banner/list").then(res => {
      console.log(res);
      this.banners = res.data.data;
    });
  },
  methods: {}
};
</script>

<style scoped lang="less">
.my-swipe {
  height: 360px;
  overflow: hidden;
}
.my-swipe .van-swipe-item img {
  width: 100%;
}
.wrap {
  position: relative;
  .nav {
    width: 100%;
    height: 1.4rem;
    background: white;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    border-radius: 20% 20% 0 0;
    border-bottom: 0.2rem solid #f5f5f5;
    font-size: 0.2rem;
    li {
      img {
        width: 0.58rem;
        height: 0.58rem;
      }
      p {
        font-size: 0.26rem;
      }
    }
  }
}
</style>
