<template>
  <div>
    <el-row id="topbar">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="left">
          <el-col :xs="0" :sm="24" :md="24" :lg="4"></el-col>
          <el-col :xs="8" :sm="24" :md="24" :lg="4">
            <img class="left-img" src="@/assets/cloudblog.png" alt />
          </el-col>
          <el-col :xs="0" :sm="24" :md="24" :lg="16">
            <el-menu mode="horizontal">
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">问答</el-menu-item>
              <el-menu-item index="3">博客</el-menu-item>
              <el-menu-item index="4">维护中心</el-menu-item>
            </el-menu>
          </el-col>
        </div>
      </el-col>

      <!-- <div class="center">
      </div>-->
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="right">
           <el-col :xs="18" :sm="4" :md="4" :lg="18" >
             登录名
           </el-col>
          <el-col :xs="6" :sm="20" :md="20" :lg="2" >
            <el-dropdown class="topbar-dropdown" trigger="click">
              <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon-s-promotion f769fcd"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus">首页</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">问答</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">博客</el-dropdown-item>
                <el-dropdown-item icon="el-icon-check">维护中心</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :xs="0" :sm="24" :md="24" :lg="4"></el-col>
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
  data() {
    return {};
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