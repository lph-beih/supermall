<!--  -->
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
.nav-bar {
  height: 44px;
  line-height: 44px;
  display: flex;
  text-align: center;
  box-shadow: -1px -1px 1px #ccc;
  .left,
  .right {
    width: 100px;
  }
  .center {
    flex: 1;
  }
}
</style>
