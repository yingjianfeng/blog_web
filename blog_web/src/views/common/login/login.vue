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
        <el-row class="main-check mt10">
          <el-input placeholder="请输入验证码" class="main-check-input"></el-input>
          <el-button class="main-check-btn cf7fbfc">获取验证码</el-button>
        </el-row>
        <el-button class="submit mt10 c769fcd" @click="login()">登录</el-button>
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
      password: ""
    };
  },
  methods:{
    login(){
     const that = this;
        
      
        this.$axios
        .post(
          "user/login" ,
          {
            "nickname":that.nickname,
            "password":that.password
          }
        )
        .then(function(response) {
          console.log(response.data);
          var code  = response.data.code;
          if(code==200){
            that.$message.success("登录成功")
          }else{
            that.$message.error(response.data.message);
          }
        })
    }
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

..el-message{
  width: 200px;
}
</style>