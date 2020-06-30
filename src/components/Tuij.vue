<template>
  <div class="tuij">
    <p class="title">
      <span>人气推荐</span>
      <van-icon class="small" name="arrow" />
    </p>
    <ul class="tj">
        <tj-item v-for="item in tjlist" :tj="item" :key="item.id"></tj-item>
    </ul>
  </div>
</template>

<script>
import TjItem from "@/components/TjItem"
export default {
  data() {
    return {
        tjlist:[]
    };
  },
  created() {},
  components: {
      TjItem
  },
  mounted() {
      this.$http.get("https://api.it120.cc/small4/shop/goods/kanjia/list").then((res)=>{
          console.log(res)
          this.tjlist=res.data.data.goodsMap
      })
  },
  methods: {}
};
</script>

<style scoped lang="less">
.tuij {
    border-bottom: 0.18rem solid #F5F5F5;
  .title {
    width: 100%;
    height: 0.54rem;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 0.22rem;
    }
    .small {
      font-size: 0.22rem;
    }
  }
  .tj{
      width: 100%;
      padding: 0 0.16rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    //   align-items: space-between;
      box-sizing: border-box;
  }
  
}
</style>
