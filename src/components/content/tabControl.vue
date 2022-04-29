<!--  -->
<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in tabControlList"
      :key="index"
      :class="{ activeText: currentIndex === index }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabControlList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },

  components: {},

  mounted() {},

  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabControlClick", index);
    },
  },
};
</script>
<style lang="less" scoped>
.tab-control {
  display: flex;
  justify-content: space-around;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.activeText {
  color: pink;
  //   border-bottom-color: 1px solid pink;
  border-bottom: 2px solid pink;
}
</style>
