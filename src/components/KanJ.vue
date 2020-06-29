<template>
  <div class="kan">
    <p class="title">
      <span>全民砍价</span>
      <van-icon class="small" name="arrow" />
    </p>
    <ul class="list">
      <li v-for="(item) of lbjkanj" :key="item.id">
        <img :src="item.pic" alt />
        <div class="box">
          <div>
            <p class="ming">{{ item.name }}</p>
            <p class="jie">{{ item.characteristic }}</p>
          </div>
          <ol>
            <li>
              <p class="di">￥{{ item.minPrice }}</p>
              <p class="dijia zhong">低价</p>
            </li>
            <li>
              <p class="xian">￥{{ item.originalPrice }}</p>
              <p class="xian zhong">原价</p>
            </li>
            <li>
              <p class="xian">￥{{ item.stores }}</p>
              <p class="xian zhong">限量</p>
            </li>
          </ol>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lbjkanj: [],
      lbjshang: []
    };
  },
  created() {},
  mounted() {
    this.$http
      .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
      .then(res => {
        console.log(res);
        this.lbjkanj = res.data.data.goodsMap;
      });
  },
  methods: {}
};
</script>

<style scoped lang="less">
.kan {
  .title {
    width: 100%;
    height: 0.52rem;
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
    >li {
      width: 100%;
      display: flex;padding: 0.1rem;
      border-bottom: 0.01rem solid #E9E9E9;
      img {
        width: 1.58rem;
        height: 1.58rem;
      }
      .box {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          margin-left: 0.1rem;
        .ming {
          width:3.1rem;
          font-size: 0.2rem;
        }
        .jie {
          width: 3.1rem;
          color: #B2B2B2;
          padding: 0.14rem 0;
          font-size: 0.15rem;
        }
        ol {
          width: 3.1rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          >li{
              width: 1rem;
              display: flex;
              flex-direction: column;
           .di{
               color: #D00000;
               font-weight: bold;
           }
           .dijia{
               font-size: 0.14rem;
               color: #000;
           }
           .zhong{
               margin: 0 0.04rem;
           }
           .xian{
               font-size: 0.18rem;
               color: #B2B2B2;
           }
           
          }
          
        }
      }
    }
  }
}
</style>
