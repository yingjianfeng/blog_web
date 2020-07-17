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
        <el-input v-model="nickname" placeholder="请输入昵称" clearable class="account mt10"></el-input>
        <el-input v-model="password" placeholder="请输入密码" show-password class="password mt10"></el-input>
        <el-row class="main-check mt10" v-show="check.ischeck">
          <el-input placeholder="请输入验证码" class="main-check-input"></el-input>
          <el-button
            :disabled="check.btndisabled"
            class="main-check-btn cb9d7ea white"
            @click="getvalidatecode"
          >{{check.message}}</el-button>
        </el-row>
        <el-button class="submit mt10 c769fcd white" @click="login()">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      nickname: "",
      password: "",
      check: {
        ischeck: false, //是否检查
        message: "null", //显示文字
        btndisabled: false, //是否可点击
        timer: "", //定时器
        time: 15 //倒计时
      }
    };
  },
  methods: {
    checkvalidate() {
      const that = this;
      this.$axios.get("user/checkvalidate").then(function(response) {
        console.log(response.data.data);
        var data = response.data.data;
        var code = data.code;
        var message = data.message;
        if (code == "00000") {
          that.check.ischeck = false;
        } else if (code == "99999") {
          that.check.ischeck = false;
          console.log("配置验证异常");
        } else {
          that.check.ischeck = true;
          console.log(message);
          that.check.message = message;
        }
      });
    },
    getvalidatecode() {
      const that = this;
      if (that.nickname == "") {
        that.$message.error("请输入昵称再获取");
        return;
      }
      that.check.btndisabled = true;
      //发送请求
      this.$axios
        .get("user/getvalidatecode/" + that.nickname)
        .then(function(response) {
          console.log(response.data);
          var data = response.data.data;
          var message = response.data.message;
          if (message == "success") {
            that.$message.success(data);
          } else {
            that.$message.error("发送失败,失败原因:" + data);
          }
        });
      //开启定时
      that.timer = setInterval(function() {
        if (that.check.time == 1) {
          //倒计时结束
          that.check.btndisabled = false;
          clearInterval(that.timer);
          that.checkvalidate();
          that.check.time = 15;
        }
        that.check.message = that.check.time + "秒之后再获取";
        that.check.time--;
      }, 1000);
    },
    login() {
      const that = this;
      this.$axios
        .post("user/login", {
          nickname: that.nickname,
          password: that.password
        })
        .then(function(response) {
          console.log(response.data);
          var code = response.data.code;
          if (code == 200) {
            that.$message.success("登录成功");
            that.$router.push("/user/questions");
          } else {
            that.$message.error(response.data.message);
          }
        });
    }
  },
  created() {
    this.checkvalidate();
  }
};
</script>

<style>
.white{
  color: white;
}
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
  /* text-align: center; */
  /* width: 100%; */
  height: 69%;
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

.el-message {
  width: 200px;
}
</style>