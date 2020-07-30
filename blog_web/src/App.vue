<template>
  <div id="app">
    <transition name="el-zoom-in-center">
      <router-view />
    </transition>
    <!-- 脚部分 -->
    <el-row class="footer">
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <span>移动端 个人博客 Copyright © 2020</span>
      </el-col>
      <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
        <span>PC端 个人博客 Copyright © 2020</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "App",
  peovide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style>
@media screen and (max-width: 500px) {
  .el-message {
    min-width: 200px;
  }
  #indexmaincontent {
    width: 100%;
    display: flex;
    flex-direction: column !important;
  }
  #indexmaincontent .item {
    width: 100% !important;
  }
  #showedit {
    display: block !important;
  }
}
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background: rgb(240, 238, 238);
}
.cf7fbfc {
  background: #f7fbfc;
}
.cd6e6f2 {
  background: #d6e6f2;
}
.cb9d7ea {
  background: #b9d7ea;
}
.c769fcd {
  background: #769fcd;
}
.f769fcd {
  color: #769fcd;
}
.c67c23a {
  background: #67c23a;
}

.footer {
  /* width: 100%; */

  bottom: 0px;
  text-align: center;
  font-size: 15px;
  color: #769fcd;
}
*{
  /* font-family: 楷体; */
}
</style>
