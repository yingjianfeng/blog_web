<template>
  <div>
    <el-row id="topbar">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="left">
          <el-col :xs="1" :sm="4" :md="4" :lg="4"></el-col>
          <el-col :xs="7" :sm="4" :md="4" :lg="4">
            <div class="left-bar-logo">
              <el-col :xs="0" :sm="24" :md="24" :lg="24">
                <img class="left-img" src="@/assets/cloudblog.png" alt />
              </el-col>
              <el-col :xs="24" :sm="0" :md="0" :lg="0">
                <i @click="showleftbar" class="el-icon-s-unfold el-icon-s-promotion f769fcd"></i>
              </el-col>
            </div>
          </el-col>
          <el-col :xs="0" :sm="16" :md="16" :lg="16">
            <el-menu mode="horizontal" @select="topage" :default-active="i">
              <el-menu-item index="index">首页</el-menu-item>
              <el-menu-item index="questions/list">问答</el-menu-item>
              <el-menu-item index="blog/list">博客</el-menu-item>
              <el-menu-item index="bug" disabled>维护中心</el-menu-item>
            </el-menu>
          </el-col>
        </div>
      </el-col>

      <!-- <div class="center">
      </div>-->
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="right">
          <el-col :xs="17" :sm="8" :md="8" :lg="18">{{user.name}}</el-col>
          <el-col :xs="6" :sm="16" :md="16" :lg="2">
            <el-dropdown class="topbar-dropdown" trigger="click" @command="topage">
              <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon-s-promotion f769fcd"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus" command="personal">个人中心</el-dropdown-item>
                <el-dropdown-item icon="el-icon-plus" command="baseinfo">基本信息设置</el-dropdown-item>
                <el-dropdown-item icon="el-icon-plus" command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :xs="1" :sm="24" :md="24" :lg="4"></el-col>
        </div>
      </el-col>
      <!-- </div> -->
    </el-row>
    <div class="div"></div>
  </div>
</template>

<script>
export default {
  name: "topbat",
  props: ["isshow"],
  data() {
    return {
      user: {},
      i: "index"
    };
  },
  methods: {
    topage(pagecode) {
      if (pagecode == "logout") {
        console.log("退出登录");
        localStorage.removeItem("cloud_blog_token");
        this.$router.push("/");
        return;
      }
      this.i = pagecode;
      window.localStorage.setItem("cloud_index", pagecode);
      this.$router.push("/user/" + pagecode);
    },
    getbaseinfo() {
      const that = this;
      that.$axios.get("user/getbaseinfo").then(function(response) {
        that.user = response.data.data;
      });
    },
    showleftbar() {
      const that = this;
      that.isshow.isshow = !that.isshow.isshow;
    }
  },

  created() {
    this.getbaseinfo();
    var temp = window.localStorage.getItem("cloud_index");
    if (temp != null) {
      this.i = temp;
    }
  }
};
</script>

<style>
#topbar {
  height: 50px;
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  border-bottom: 1px solid #e6e6e6;
  position: fixed;
  background: white;
  z-index: 999;
}
.el-menu {
  height: 50px;
}
.el-menu--horizontal > .el-menu-item {
  height: 50px;
  line-height: 40px;
}
.left {
  height: 100%;
  /* background: rgb(187, 80, 80); */
  /* width: 55%; */
  display: flex;
  /* justify-content: center; */
  justify-content: flex-start;
}
.left-bar-logo {
  width: 100%;
  height: 100%;
  font-size: 30px;
  line-height: 50px;
}
.center {
  height: 100%;
  /* background: rgb(17, 47, 110); */
  width: 30%;
}
.right {
  height: 100%;
  /* background: rgb(151, 153, 39); */
  /* width: 25%; */
  /* margin-right: 150px; */
  display: flex;
  justify-content: flex-end;
  text-align: right;
  line-height: 50px;
}
.div {
  height: 50px;
  width: 50px;
}

.topbar-dropdown {
  line-height: 50px;
  font-size: 30px;
}
</style>