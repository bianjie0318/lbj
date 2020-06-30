<template>
  <div class="kan">
    <p class="title">
      <span>全民砍价</span>
      <van-icon class="small" name="arrow" />
    </p>
    <van-loading v-if="!isShow" type="spinner" color="#1989fa" />
    <ul class="list" v-else>
      <kj-item v-for="item in lbjkanj" :kan="item" :key="item.id"></kj-item>
    </ul>
  </div>
</template>

<script>
import KjItem from "@/components/KjItem";
export default {
  data() {
    return {
      lbjkanj: {},
      isShow:true
    };
  },
  created() {},
  mounted() {
    this.$http
      .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
      .then(res => {
        // console.log(res);
        this.lbjkanj = res.data.data.goodsMap;
      });
  },
  components: {
    KjItem
  },
  methods: {}
};
</script>

<style scoped lang="less">
.kan {
  border-bottom: 0.15rem solid #F5F5F5;
  .title {
    width: 100%;
    height: 0.54rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.01rem solid #e9e9e9;
    span {
      font-size: 0.22rem;
    }
    .small {
      font-size: 0.22rem;
    }
  }
  .list {
    font-size: 0.18rem;
    width: 100%;
    box-sizing: border-box;
    
  }
}
</style>
