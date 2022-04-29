<!--  -->
<template>
  <div class="tabbar-content">
    <slot></slot>
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
<style scoped>
.tabbar-content {
  height: 49px;
  background-color: azure;
  box-shadow: -2px -2px 2px #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
