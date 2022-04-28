<template>
  <div id="app">
    <router-view></router-view>
    <Tab-Bar>
      <!--  -->
      <Tab-Bar-Item path="/home" activeColor="blue">
        <i class="el-icon-s-home tabbar-icon" slot="tabbar-icon"></i>
        <i
          class="el-icon-s-home tabbar-icon"
          slot="tabbar-icon-active"
          style="color: blue"
        ></i>
        <div class="tabbar-text" slot="tabbar-text">首页</div>
      </Tab-Bar-Item>
      <Tab-Bar-Item path="/category" activeColor="blue">
        <i class="el-icon-s-cooperation tabbar-icon" slot="tabbar-icon"></i>
        <i
          class="el-icon-s-cooperation tabbar-icon"
          slot="tabbar-icon-active"
          style="color: blue"
        ></i>
        <div class="tabbar-text" slot="tabbar-text">分类</div>
      </Tab-Bar-Item>
      <Tab-Bar-Item path="/Shopcar" activeColor="blue">
        <i class="el-icon-s-claim tabbar-icon" slot="tabbar-icon"></i>
        <i
          class="el-icon-s-claim tabbar-icon"
          slot="tabbar-icon-active"
          style="color: blue"
        ></i>
        <div class="tabbar-text" slot="tabbar-text">购物车</div>
      </Tab-Bar-Item>
      <Tab-Bar-Item path="/profile" activeColor="blue">
        <i class="el-icon-s-check tabbar-icon" slot="tabbar-icon"></i>
        <i
          class="el-icon-s-check tabbar-icon"
          slot="tabbar-icon-active"
          style="color: blue"
        ></i>
        <div class="tabbar-text" slot="tabbar-text">档案</div>
      </Tab-Bar-Item>
    </Tab-Bar>
    <router-link to="/home">去首页</router-link>
  </div>
</template>

<script>
import TabBar from "./components/common/tarBar/tabBar.vue";
import TabBarItem from "./components/common/tarBar/tabBarItem.vue";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
@import "assets/css/base.css";
</style>
