<!--  -->
<template>
  <div>
    <Swiper>
      <Swiper-Item v-for="(item, index) in bannerList" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </Swiper-Item>
    </Swiper>
  </div>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";
import SwiperItem from "@/components/common/swiper/SwiperItem";
export default {
  props: {
    bannerList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },

  components: {
    Swiper,
    SwiperItem,
  },

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped></style>
