<template>
  <el-drawer size="50%" title="导航" :visible.sync="isshow.isshow" :direction="direction">
    <el-menu default-active="2" class="el-menu-vertical-demo" @select="topage">
      <el-menu-item index="index" >
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="questions">
        <i class="el-icon-magic-stick"></i>
        <span slot="title">问答</span>
      </el-menu-item>
      <el-menu-item index="blog/list" >
        <i class="el-icon-document"></i>
        <span slot="title">博客</span>
      </el-menu-item>
      <el-menu-item index="bug" disabled>
        <i class="el-icon-setting"></i>
        <span slot="title">维护中心</span>
      </el-menu-item>
    </el-menu>
  </el-drawer>
</template>

<script>
export default {
  name: "leftbar",
  props: ["isshow"],
  data() {
    return {
      direction: "ltr"
    };
  },
  methods:{
    topage(pagecode) {
      if (pagecode == "logout") {
        console.log("退出登录");
        localStorage.removeItem("cloud_blog_token");
        this.$router.push("/");
        return;
      }
      this.$router.push("/user/" + pagecode);
      this.isshow.isshow = !this.isshow.isshow;
    }
  }
};
</script>

<style>
</style>