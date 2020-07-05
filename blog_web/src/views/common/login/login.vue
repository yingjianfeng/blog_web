<template>
  <div id="login">
    <!-- 头部分 -->
    <div class="head">
      <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
        <img class="pngpc" src="@/assets/cloudblog.png" alt />
      </el-col>
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <img class="pngmobile" src="@/assets/cloudblog.png" alt />
      </el-col>
    </div>
    <!-- 主要部分 -->
    <el-row class="main">
      <el-col :xs="20" :sm="10" :md="8" :lg="6" :xl="4">
        <el-input placeholder="请输入账号" clearable class="account mt10"></el-input>
        <el-input placeholder="请输入密码" show-password class="password mt10"></el-input>
        <el-row class="main-check mt10">
          <el-input placeholder="请输入验证码" class="main-check-input"></el-input>
          <el-button class="main-check-btn cf7fbfc">获取验证码</el-button>
        </el-row>
        <el-button class="submit mt10 c769fcd">登录</el-button>
      </el-col>
    </el-row>

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
  name: "login",
  data() {
    return {};
  }
};
</script>

<style>
.head {
  display: flex;
  width: 100%;
  height: 30%;
  justify-content: center; /* 水平居中 */
  text-align: center;
  align-items: center;
}
.head .pngpc {
  width: 200px;
  height: 100px;
}
.head .pngmobile {
  width: 100px;
  height: 50px;
}
#login {
  /* width: 100%; */
  height: 100%;
}
.main {
  display: flex;
  justify-content: center; /* 水平居中 */
  /* align-items: center;  */
  text-align: center;
  /* width: 100%; */
  height: 69%;
}

.footer {
  /* width: 100%; */
  text-align: center;
  font-size: 15px;
  color: #769fcd;
}

.main-check {
  display: flex;
  justify-content: space-between;
}
.main-check-input {
  /* width: 50%; */
  margin-right: 40px;
}

.submit {
  width: 100%;
}
.mt10 {
  margin-top: 10px;
}
</style>