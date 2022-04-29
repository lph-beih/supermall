<template>
  <div class="home">
    <Nav-Bar class="nav-bar"><div slot="center">购物车</div></Nav-Bar>
    <Swiper :bannerList="bannerList"></Swiper>
    <Recommend :recommendList="recommendList"></Recommend>
    <TabControl
      :tabControlList="tabControlList"
      class="tabControl"
      @tabControlClick="tabControlClick"
    ></TabControl>
    <Goods :goodsItem="showGood"></Goods>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/navBar";
import Swiper from "./childrenCompons/homeSwiper.vue";
import Recommend from "./childrenCompons/homeRecommed.vue";

import TabControl from "@/components/content/tabControl";
import Goods from "@/components/content/homeGoods";

import { getHomeMultidata, getHomeGoods } from "@/network/home";
export default {
  data() {
    return {
      bannerList: [],
      recommendList: [],
      tabControlList: ["流行", "新品", "精选"],
      currentGood: "pop",
      goods: {
        pop: {
          page: 0,
          list: [
            {
              img: "https://gw.alicdn.com/imgextra/i2/O1CN010FrvWz1yjGKflIwFO_!!6000000006614-2-tps-468-602.png_230x10000.jpg_.webp",
              title: "大牌好货1",
            },
            {
              img: "https://gw.alicdn.com/imgextra/i2/O1CN010FrvWz1yjGKflIwFO_!!6000000006614-2-tps-468-602.png_230x10000.jpg_.webp",
              title: "大牌好货2",
            },
            {
              img: "https://gw.alicdn.com/imgextra/i2/O1CN010FrvWz1yjGKflIwFO_!!6000000006614-2-tps-468-602.png_230x10000.jpg_.webp",
              title: "大牌好货3",
            },
            {
              img: "https://gw.alicdn.com/imgextra/i2/O1CN010FrvWz1yjGKflIwFO_!!6000000006614-2-tps-468-602.png_230x10000.jpg_.webp",
              title: "大牌好货",
            },
          ],
        },
        new: {
          page: 0,
          list: [
            {
              img: "https://gw.alicdn.com/imgextra/i1/O1CN01IBsuQu1Yar37qjTp0_!!6000000003076-2-tps-468-602.png_230x10000.jpg_.webp",
              title: "直营品质1",
            },
            {
              img: "https://gw.alicdn.com/imgextra/i1/O1CN01IBsuQu1Yar37qjTp0_!!6000000003076-2-tps-468-602.png_230x10000.jpg_.webp",
              title: "直营品质2",
            },
            {
              img: "https://gw.alicdn.com/imgextra/i1/O1CN01IBsuQu1Yar37qjTp0_!!6000000003076-2-tps-468-602.png_230x10000.jpg_.webp",
              title: "直营品质3",
            },
            {
              img: "https://gw.alicdn.com/imgextra/i1/O1CN01IBsuQu1Yar37qjTp0_!!6000000003076-2-tps-468-602.png_230x10000.jpg_.webp",
              title: "直营品质3",
            },
          ],
        },
        sell: {
          page: 0,
          list: [
            {
              img: "https://gw.alicdn.com/imgextra/i2/O1CN010FrvWz1yjGKflIwFO_!!6000000006614-2-tps-468-602.png_230x10000.jpg_.webp",
              title: "大牌好货1",
            },
            {
              img: "https://gw.alicdn.com/imgextra/i1/O1CN01IBsuQu1Yar37qjTp0_!!6000000003076-2-tps-468-602.png_230x10000.jpg_.webp",
              title: "大牌好货2",
            },
            {
              img: "https://gw.alicdn.com/imgextra/i2/O1CN010FrvWz1yjGKflIwFO_!!6000000006614-2-tps-468-602.png_230x10000.jpg_.webp",
              title: "大牌好货3",
            },
            {
              img: "https://gw.alicdn.com/imgextra/i2/O1CN010FrvWz1yjGKflIwFO_!!6000000006614-2-tps-468-602.png_230x10000.jpg_.webp",
              title: "大牌好货",
            },
          ],
        },
      },
    };
  },
  components: {
    NavBar,
    Swiper,
    Recommend,
    TabControl,
    Goods,
  },
  computed: {
    // 展示商品
    showGood() {
      return this.goods[this.currentGood].list;
    },
  },
  created() {
    getHomeMultidata().then((res) => {
      this.bannerList = res.data.data.banner.list;
      this.recommendList = res.data.data.recommend.list;
    });
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {},

  methods: {
    // 监听tabControl的切换事件
    tabControlClick(index) {
      console.log("&&&&&&&&&&&");
      switch (index) {
        case 0:
          this.currentGood = "pop";
          break;
        case 1:
          this.currentGood = "new";
          break;
        case 2:
          this.currentGood = "sell";
          break;
      }
    },
    // 获取商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res.data.list);
        // 目前接口不能用
        // this.goods[type].list.push(...res.data.list);
      });
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  padding-top: 44px;
}
.nav-bar {
  background-color: pink;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.tabControl {
  position: sticky;
  top: 44px;
  background-color: white;
}
</style>
