<!--  -->
<template>
  <div class="tabbar-item" @click="clickItem">
    <div v-if="!isActive">
      <slot name="tabbar-icon"></slot>
    </div>
    <div v-else>
      <slot name="tabbar-icon-active"></slot>
    </div>
    <!-- slot之所以使用div包裹是因为，如果不包裹可能会被引用的地方所覆盖掉 -->
    <div :style="activeStyle">
      <slot name="tabbar-text"></slot>
    </div>
    <!-- <div>
      <slot name="tabbar-text"></slot>
    </div> -->
  </div>
</template>
<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },
  computed: {
    //   通过判断当前路由中是否包含父组件传过来的path来确定目前是不是激活状态
    isActive() {
      //
      return this.$route.path.indexOf(this.path) !== -1;
    },
    // 激活状态时，把父组件给的颜色设置一下
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  components: {},

  mounted() {},

  methods: {
    clickItem() {
      this.$router.push({
        path: this.path, //跳转的路径
      });
    },
  },
};
</script>
<style lang="less" scoped>
.tabbar-item {
  text-align: center;
  .tabbar-icon {
    font-size: 24px;
  }
  .tabbar-text {
    font-size: 14px;
  }
}
.active {
  color: red;
}
</style>
