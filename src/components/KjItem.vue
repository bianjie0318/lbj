<template>
  <div class="item">
    <!-- <ul class="list"> -->
    <!-- <li v-for="(item) of lbjkanj" :key="item.id"> -->
    <img :src="kan.pic" alt />
    <div class="box">
      <div>
        <p class="ming">{{ kan.name }}</p>
        <p class="jie">{{ kan.characteristic }}</p>
      </div>
      <ol>
        <li>
          <p class="di">￥{{ kan.minPrice }}</p>
          <p class="dijia zhong">低价</p>
        </li>
        <li>
          <p class="xian">￥{{ kan.originalPrice }}</p>
          <p class="xian zhong">原价</p>
        </li>
        <li>
          <p class="xian">￥{{ kan.stores }}</p>
          <p class="xian zhong">限量</p>
        </li>
      </ol>
    </div>
    <!-- </li> -->
    <!-- </ul> -->
  </div>
</template>

<script>
export default {
  props: ["kan"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.item {
  width: 100%;
  display: flex;
  padding: 0.1rem;
  border-bottom: 0.01rem solid #e9e9e9;
  box-sizing: border-box;
  img {
    width: 1.58rem;
    height: 1.58rem;
    border-radius: 0.05rem;
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 0.1rem;
    .ming {
      width: 3.1rem;
      font-size: 0.2rem;
    }
    .jie {
      width: 3.1rem;
      color: #b2b2b2;
      padding: 0.14rem 0;
      font-size: 0.15rem;
    }
    ol {
      width: 3.1rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      > li {
        width: 1rem;
        display: flex;
        flex-direction: column;
        .di {
          color: #d00000;
          font-weight: bold;
        }
        .dijia {
          font-size: 0.14rem;
          color: #000;
        }
        .zhong {
          margin: 0 0.04rem;
        }
        .xian {
          font-size: 0.18rem;
          color: #b2b2b2;
        }
      }
    }
  }
}
</style>
