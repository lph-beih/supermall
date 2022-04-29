<!--  -->
<template>
  <div class="home-goods">
    <div
      class="home-goods-item"
      v-for="(item, index) in goodsItem"
      :key="index"
    >
      <img :src="item.img" alt="" />
      <p class="text">{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },

  components: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
.home-goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3px 3px;

  .home-goods-item {
    width: 48%;
    overflow: hidden;
    border-radius: 6px;
    .text {
      padding: 5px 0;
    }
  }
}
</style>
