<template>
  <div class="jing">
    <p class="title">
      <span>精选专题</span>
      <van-icon class="small" name="arrow" />
    </p>
    <div class="wai">
      <ul class="list">
        <jx-item v-for="item in lbjjxlist" :jx="item" :key="item.id"></jx-item>
      </ul>
    </div>
  </div>
</template>

<script>
import JxItem from "@/components/JxItem";
export default {
  data() {
    return {
      lbjjxlist: []
    };
  },
  components: {
    JxItem
  },
  created() {},
  mounted() {
    this.$http.get("https://api.it120.cc/small4/cms/news/list").then(res => {
    //   console.log(res);
      this.lbjjxlist = res.data.data;
    });
  },
  methods: {}
};
</script>

<style scoped lang="less">
.jing {
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
  .wai {
      width: 100%;
      height: 3.78rem;
      overflow: auto;
    .list {
      width: 22.7rem;
      display: flex;
    }
  }
}
</style>
