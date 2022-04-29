<!--  -->
<template>
  <div class="recommend">
    <div
      class="recommend-item"
      v-for="(item, index) in recommendList"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommendList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {
    console.log(this.recommendList);
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
.recommend {
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  border-bottom: 8px solid #eee;
  .recommend-item {
    text-align: center;
    img {
      height: 80px;
      width: 80px;
    }
  }
}
</style>
