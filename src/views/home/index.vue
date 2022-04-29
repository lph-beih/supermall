<template>
  <div class="home">
    <Nav-Bar class="nav-bar"><div slot="center">购物车</div></Nav-Bar>
    <Swiper :bannerList="bannerList"></Swiper>
    <Recommend :recommendList="recommendList"></Recommend>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/navBar";
import Swiper from "./childrenCompons/homeSwiper.vue";
import Recommend from "./childrenCompons/homeRecommed.vue";
import { getHomeMultidata } from "@/network/home";
export default {
  data() {
    return {
      bannerList: [],
      recommendList: [],
    };
  },
  components: {
    NavBar,
    Swiper,
    Recommend,
  },
  created() {
    getHomeMultidata().then((res) => {
      this.bannerList = res.data.data.banner.list;
      this.recommendList = res.data.data.recommend.list;
      console.log(this.recommendList);
    });
  },
  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
.nav-bar {
  background-color: pink;
  color: white;
}
</style>
